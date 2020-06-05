const refresh = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  event.preventDefault()
  event.stopPropagation()
  if (typeof window !== 'undefined' && 'workbox' in window) {
    window.workbox.addEventlistener('installed', (e) => {
      if (e.isUpdate) {
        if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistration().then((registration) => {
            registration.unregister()
          })
        }
        window.location.reload()
      }
    })
  }
}

const RefreshButton = () => {
  return (
    <button type="button" onClick={refresh}>
      Refresh
    </button>
  )
}

export default RefreshButton
