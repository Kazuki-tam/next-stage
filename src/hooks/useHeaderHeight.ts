import type { RefObject } from 'react'
import { useEffect } from 'react'

const useHeaderHeight = (headerEl: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (headerEl?.current) {
      const height = headerEl.current.clientHeight
      document.documentElement.style.setProperty('--header-height', height + 'px')
    }
  }, [headerEl])
}

export { useHeaderHeight }
