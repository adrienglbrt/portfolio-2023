'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

export default function LenisScroll({ children }) {

  return (
    <ReactLenis root>
        {children}
    </ReactLenis>
  )
}