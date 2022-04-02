import { useAtom } from 'jotai'
import { useCallback } from 'react'

import { sideBarExpandAtom } from '@/globalStates/atom'

const useCloseBackDrop = () => {
  const [_, setSidebarExpand] = useAtom(sideBarExpandAtom)
  const closeBackDrop = useCallback(() => {
    setSidebarExpand(false)
  }, [setSidebarExpand])
  return closeBackDrop
}

export { useCloseBackDrop }
