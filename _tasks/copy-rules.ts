import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { globSync } from "glob";

// Get editor from command line arguments
const editor = process.argv[2] || "cursor"; // Default is cursor

// Function to remove frontmatter (part surrounded by ---)
function removeFrontmatter(content: string): string {
  // Remove frontmatter if it exists
  if (content.startsWith("---")) {
    const secondDashIndex = content.indexOf("---", 3);
    if (secondDashIndex !== -1) {
      return content.substring(secondDashIndex + 3).trim();
    }
  }
  return content;
}

// New function to read and process rules
async function readAndProcessRules(): Promise<{
  coreRuleContent: string;
  otherRulesContent: string;
}> {
  const ruleFiles = globSync("_llm-rules/*.md");
  let coreRuleContent = "";
  let otherRulesContent = "";

  for (const file of ruleFiles) {
    const fileName = path.basename(file, ".md");
    const sourceFile = Bun.file(file);
    const content = await sourceFile.text();
    const contentWithoutFrontmatter = removeFrontmatter(content);

    if (!contentWithoutFrontmatter.trim()) {
      // biome-ignore: Skipping files with no content
      console.log(`Skipping ${file} as it has no content besides frontmatter`);
      continue;
    }

    if (fileName === "core-rule") {
      coreRuleContent = contentWithoutFrontmatter;
    } else {
      otherRulesContent += `\n\n# ${fileName.toUpperCase()} Rules\n\n${contentWithoutFrontmatter}`;
    }
  }
  return { coreRuleContent, otherRulesContent };
}

async function copyRules() {
  if (editor === "cursor") {
    await processCursorRules();
  } else if (editor === "windsurf") {
    await processWindsurfRules();
  } else if (editor === "copilot") {
    await processCopilotRules();
  } else {
    // biome-ignore lint/suspicious/noConsole: <invalid editor>
    console.error(`Unsupported editor: ${editor}`);
    process.exit(1);
  }
}

async function processCursorRules() {
  const targetDir = ".cursor/rules";
  const fileExtension = ".mdc";

  // Create target directory if it doesn't exist
  if (!existsSync(targetDir)) {
    await mkdir(targetDir, { recursive: true });
    // biome-ignore: create-directory
    console.log(`Created directory ${targetDir}`);
  }

  // Get md files from _llm-rules directory
  const ruleFiles = globSync("_llm-rules/*.md");

  // Copy each file to target directory and change extension
  for (const file of ruleFiles) {
    const fileName = path.basename(file, ".md");

    // Rename all rules to have editor prefix (e.g., cursor-rule-name)
    const newFileName = `${editor}-${fileName}`;

    const sourceFile = Bun.file(file);
    const content = await sourceFile.text();

    const targetPath = `${targetDir}/${newFileName}${fileExtension}`;
    await Bun.write(targetPath, content);
    // biome-ignore: Copying files
    console.log(`Copied ${file} to ${targetPath}`);
  }
}

async function processWindsurfRules() {
  const targetDir = ".windsurf/rules";

  // Create target directory if it doesn't exist
  if (!existsSync(targetDir)) {
    await mkdir(targetDir, { recursive: true });
    // biome-ignore: create-directory
    console.log(`Created directory ${targetDir}`);
  }

  // Get md files from _llm-rules directory
  const ruleFiles = globSync("_llm-rules/*.md");

  // Copy each file to target directory with trigger prefix based on alwaysApply
  for (const file of ruleFiles) {
    const fileName = path.basename(file, ".md");
    const sourceFile = Bun.file(file);
    const content = await sourceFile.text();

    // Parse frontmatter
    let trigger = "manual"; // Default trigger
    let frontmatterContent = "";
    let mainContent = content;

    if (content.startsWith("---")) {
      const secondDashIndex = content.indexOf("---", 3);
      if (secondDashIndex !== -1) {
        frontmatterContent = content.substring(3, secondDashIndex).trim();
        mainContent = content.substring(secondDashIndex + 3).trim();

        // Check if alwaysApply is true
        if (frontmatterContent.includes("alwaysApply: true")) {
          trigger = "always_on";
        }
      }
    }

    // Create new content with trigger prefix
    const newContent = `---\ntrigger: ${trigger}\n---\n\n${mainContent}`;

    const targetPath = `${targetDir}/${fileName}.md`;
    await Bun.write(targetPath, newContent);
    // biome-ignore: Copying files
    console.log(`Copied ${file} to ${targetPath} with trigger: ${trigger}`);
  }
}

async function processCopilotRules() {
  const { coreRuleContent, otherRulesContent } = await readAndProcessRules();
  const mergedContent = coreRuleContent + otherRulesContent;

  // Create target directory if it doesn't exist
  const targetDir = ".github";
  if (!existsSync(targetDir)) {
    await mkdir(targetDir, { recursive: true });
    // biome-ignore: create-directory
    console.log(`Created directory ${targetDir}`);
  }

  // Create copilot-instructions.md file in .github directory
  const targetPath = `${targetDir}/copilot-instructions.md`;

  await Bun.write(targetPath, mergedContent);
  // biome-ignore: Copying files
  console.log(`Merged rule files and saved to ${targetPath}`);
}

copyRules();
