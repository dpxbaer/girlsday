export const installer = (selector = '#installButton') => {
  let installPrompt
  const button = document.querySelector(selector)

  button.style.display = 'none'

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault()
    button.style.display = 'inline-block'
    installPrompt = e
  })

  button.addEventListener('click', () => {
    if (!installPrompt) {
      return
    }

    installPrompt.prompt()

    installPrompt.userChoice.then(result => {
      installPrompt = null
      button.style.display = 'none'
    })
  })
}

export const serviceWorker = async (worker = '/sw.js', scope = '/') => {
  if ('serviceWorker' in navigator) {
    const swRegistration = await navigator.serviceWorker.register(worker, {
      scope
    })
    return swRegistration
  } else {
    return null
  }
}