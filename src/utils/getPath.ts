export const getPath = (href: string) => {
  const localPath = 'http://localhost:3000'
  const domainPath = href
  return href.startsWith('https') ? domainPath : localPath
}
