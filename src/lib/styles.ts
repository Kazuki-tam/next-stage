/**
 * 共通のスタイル定数
 * コンポーネント間で再利用可能なスタイル定義
 */

export const styles = {
  // ボタンスタイル
  buttons: {
    primary: "flex items-center gap-2 bg-[var(--blue-primary)] hover:bg-[var(--blue-dark)] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 shadow-lg hover:shadow-xl",
    secondary: "flex items-center gap-2 bg-[#222] hover:bg-[#333] text-white px-6 py-3 rounded-md font-medium border border-[#444] transition-all duration-300",
    link: "flex items-center gap-2 px-4 py-2 bg-[#222] hover:bg-[#333] rounded-md font-medium border border-[#444] transition-colors",
    accent: "flex items-center gap-2 px-4 py-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-md font-medium transition-colors duration-200"
  },
  
  // カードスタイル
  cards: {
    feature: "bg-[#111] p-8 rounded-xl border border-[#333] hover:border-[var(--blue-primary)] transition-all duration-300 hover:shadow-[0_0_15px_var(--blue-shadow)] group flex flex-col h-full",
    section: "w-full bg-[#111] p-8 rounded-xl border border-[#333] mt-4"
  },
  
  // アイコンコンテナ
  iconContainer: "bg-[var(--blue-bg-light)] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 border border-[var(--blue-border-light)] group-hover:bg-[var(--blue-bg-light)] transition-all duration-300",
  
  // テキストスタイル
  text: {
    title: "text-7xl font-bold bg-gradient-to-r from-[var(--blue-dark)] via-[var(--blue-primary)] to-[var(--blue-light)] text-transparent bg-clip-text gradient-title drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-[1.2]",
    subtitle: "text-2xl font-light mt-2 max-w-2xl",
    sectionTitle: "text-2xl font-semibold mb-6 text-white inline-flex items-center gap-2",
    cardTitle: "text-xl font-semibold mb-3 text-white group-hover:text-[var(--blue-primary)] transition-all duration-300",
    categoryTitle: "text-lg font-medium mb-3 text-[var(--blue-primary)]"
  },
  
  // レイアウト
  layout: {
    main: "flex flex-col items-center justify-center flex-1 p-8 pb-20 gap-12",
    container: "flex flex-col gap-12 items-center max-w-4xl w-full text-center",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8",
    techGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
  }
}; 