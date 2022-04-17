import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

import { sideBarExpandAtom } from '@/globalStates/atom'

const useBackground = () => {
  const [scrollVolume, setScrollVolume] = useState(0)
  const [sideBarExpand] = useAtom(sideBarExpandAtom)

  useEffect(() => {
    if (sideBarExpand) {
      const scrollY = window.pageYOffset
      setScrollVolume(scrollY)
      document.documentElement.style.setProperty('--scroll-y', scrollY + 'px')
      document.body.classList.add('u-bg-fixed')
    } else {
      document.documentElement.style.setProperty('--scroll-y', 0 + 'px')
      document.body.classList.remove('u-bg-fixed')
      window.scrollTo(0, scrollVolume)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideBarExpand])
}

export { useBackground }
