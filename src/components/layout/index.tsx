import type { ReactNode, VFC } from 'react'

import { Footer } from '../footer'
import { Header } from '../header'
import { LayoutErrorBoundary } from './LayoutErrorBoundary'

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="l-wrapper">
      <Header />
      <LayoutErrorBoundary>
        <main className="l-main">{props.children}</main>
      </LayoutErrorBoundary>
      <Footer />
    </div>
  )
}
