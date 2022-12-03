; (() => {
  const restore = (key, cls, def = false) => {
    const saved = localStorage.getItem(key)
    if (saved ? saved !== 'false' : def) {
      document.documentElement.classList.add(cls)
    }
  }

  window.__WA_BANNER_ID__ = 'v0.4.0'
  restore(`wa-docs-banner-${__WA_BANNER_ID__}`, 'banner-dismissed')
})()
