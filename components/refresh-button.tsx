const refresh = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  event.preventDefault()
  event.stopPropagation()
  if (process.browser && 'workbox' in window) {
    window.workbox.addEventListener('installed', (e) => {
      if (e.isUpdate) {
        if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
          navigator.serviceWorker
            .getRegistration()
            .then((registration) => {
              registration.unregister().catch((reason) => {
                console.log(reason)
              })
            })
            .catch((reason) => {
              console.log(reason)
            })
        } else {
          console.log('no dom.')
        }
        window.location.reload()
      } else {
        console.log('no update.')
      }
    })
  } else {
    console.log('no browser or no window.workbox')
  }
  console.log('refresh button pushed.')
}

const RefreshButton: React.FC = () => {
  return (
    <button type="button" onClick={refresh}>
      Refresh
    </button>
  )
}

export default RefreshButton
