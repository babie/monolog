const refresh = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  event.preventDefault()
  event.stopPropagation()
  if (typeof window !== 'undefined' && 'workbox' in window) {
    window.workbox.addEventlistener('installed', (e) => {
      if (e.isUpdate) {
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
