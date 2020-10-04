const refresh = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  event.preventDefault()
  event.stopPropagation()
  if (typeof window !== 'undefined' && 'workbox' in window) {
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
        }
        window.location.reload()
      }
    })
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
