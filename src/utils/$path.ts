export const pagesPath = {
  sample: {
    $url: (url?: { hash?: string }) => {
      return { pathname: '/sample' as const, hash: url?.hash }
    },
  },
  $url: (url?: { hash?: string }) => {
    return { pathname: '/' as const, hash: url?.hash }
  },
}

export type PagesPath = typeof pagesPath
