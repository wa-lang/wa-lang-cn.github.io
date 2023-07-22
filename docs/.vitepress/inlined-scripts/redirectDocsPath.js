(() => {
  const pathname = window.location.pathname
  if ([
    '/reference/spec.html',
    '/reference/design-wz.html',
  ].includes(pathname)) {
    window.location.pathname = pathname.replace('/reference/', '/guide/')
  }
})()
