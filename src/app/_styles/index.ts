/**
 * Common style constants
 */

export const styles = {
  // Button styles
  buttons: {
    primary:
      "flex items-center gap-2 bg-[var(--blue-primary)] hover:bg-[var(--blue-dark)] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 shadow-lg hover:shadow-xl",
    secondary:
      "flex items-center gap-2 bg-[var(--neutral-800)] hover:bg-[var(--neutral-700)] text-white px-6 py-3 rounded-md font-medium border border-[var(--neutral-600)] transition-all duration-300",
    link: "flex items-center gap-2 px-4 py-2 bg-[var(--neutral-800)] hover:bg-[var(--neutral-700)] rounded-md font-medium border border-[var(--neutral-600)] transition-colors",
    accent:
      "flex items-center gap-2 px-4 py-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-md font-medium transition-colors duration-200",
  },

  // Card styles
  cards: {
    feature:
      "bg-[var(--neutral-900)] p-6 rounded-xl border border-[var(--neutral-700)] hover:border-[var(--blue-primary)] transition-all duration-300 hover:shadow-[0_0_15px_var(--blue-shadow)] group flex flex-col",
    section:
      "w-full bg-[var(--neutral-900)] p-8 rounded-xl border border-[var(--neutral-700)] mt-4",
  },

  // Icon container
  iconContainer:
    "bg-[var(--blue-bg-light)] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 border border-[var(--blue-border-light)] group-hover:bg-[var(--blue-bg-light)] transition-all duration-300",

  // Text styles
  text: {
    title: "text-5xl md:text-7xl font-bold text-[var(--blue-text)] leading-[1.2]",
    subtitle: "text-2xl sm:text-3xl font-light mt-2 max-w-2xl",
    sectionTitle: "text-2xl font-semibold mb-6 text-white inline-flex items-center gap-2",
    cardTitle:
      "text-xl font-semibold mb-2 text-white group-hover:text-[var(--blue-text)] transition-all duration-300 flex items-center",
    categoryTitle: "text-lg font-medium mb-3 text-[var(--blue-text)]",
  },

  // Layout
  layout: {
    main: "flex flex-col items-center justify-center flex-1 py-8 px-4 pb-20 gap-12",
    container: "flex flex-col gap-12 items-center max-w-4xl w-full text-center",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8",
    techGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left",
  },
};
