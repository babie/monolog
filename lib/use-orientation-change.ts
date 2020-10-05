import { useState, useEffect } from 'react'

type ReturnValue = 'portrait' | 'landscape'
export const useOrientationChange = (): ReturnValue => {
  let initialOrientation: string | number = 0
  if (process.browser) {
    initialOrientation = window.orientation
  }
  const [orientation, setOrientation] = useState(initialOrientation)

  useEffect(() => {
    if (process.browser) {
      const handler = () => setOrientation(window.orientation)

      window.addEventListener('orientationchange', handler)

      return () => {
        window.removeEventListener('orientationchange', handler)
      }
    }
    return () => {}
  }, [])

  return orientation === 0 ? 'portrait' : 'landscape' // for -90 (right) and 90 (left)
}
