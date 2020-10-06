import { useState, useEffect } from 'react'

type ReturnValue = string
export const useUrlChange = (): ReturnValue => {
  let initialUrl = 'http://localhost:3000/'
  if (process.browser) {
    initialUrl = window.location.href
  }
  const [url, setUrl] = useState(initialUrl)

  useEffect(() => {
    if (process.browser) {
      const handler = () => setUrl(window.location.href)

      window.addEventListener('popstate', handler)

      return () => {
        window.removeEventListener('popstate', handler)
      }
    }
    return () => {}
  }, [])

  return url
}
