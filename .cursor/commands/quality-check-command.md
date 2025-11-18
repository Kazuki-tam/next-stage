# quality-check-command

This command performs comprehensive code quality checks. Use it before commits or when implementation is complete.

## What It Does

1. **Code Quality Check**: Linting and formatting validation with Biome
2. **Type Checking**: TypeScript type error detection
3. **Unit Testing**: Execute unit tests with Bun test runner
4. **E2E Testing**: Run integration tests with Playwright (optional)

## Usage

Running this command will execute the following checks sequentially:

```bash
# 1. Code quality check (linting + formatting + type checking)
bun run check

# 2. Unit tests
bun run test:unit

# 3. E2E tests (optional)
# bun run test:e2e
```

Note: `bun run check` now includes:
- Biome linting and formatting
- Markuplint validation
- TypeScript type checking (`tsc --noEmit`)

## Check Items

### ✅ Code Quality
- Syntax validation with Biome
- Code formatting verification
- Unused import detection
- Naming convention adherence

### ✅ Type Safety
- TypeScript strict mode validation
- Type error detection
- Type inference verification

### ✅ Testing
- Run all unit tests
- Test coverage validation
- E2E test execution (critical paths)

## Error Resolution

Steps to resolve detected errors:

1. **Linting Errors**: Try auto-fix with `bun run format`
2. **Type Errors**: Check the location in your editor and fix type definitions
3. **Test Failures**: Review test logs and fix the corresponding code

## Recommended Usage

- ✅ After feature implementation
- ✅ Before commits
- ✅ Before creating pull requests
- ✅ Before deployment

This command is available in chat as `/quality-check-command`.
