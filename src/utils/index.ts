export * from './fetchAPI'
export * from './getPath'


export const isActive = (currentPath: string, href: string) => {
  return currentPath === href
}
