import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { sideBarExpandAtom } from '@/globalStates/atom'
import { GA_TRACKING_ID, pageview } from '@/libs/gtag'

const useLocationStatus = () => {
  const [_, setSidebarExpand] = useAtom(sideBarExpandAtom)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setSidebarExpand(false)
      if (GA_TRACKING_ID) {
        pageview(url)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events])
}

export { useLocationStatus }
