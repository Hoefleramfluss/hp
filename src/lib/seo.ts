export const BASE_URL = 'https://voxon.app'

export const absUrl = (path = '/') => {
  if (!path || path === '/') {
    return `${BASE_URL}/`
  }
  return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
