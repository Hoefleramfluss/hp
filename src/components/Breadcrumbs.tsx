import { Link, useLocation } from 'react-router-dom'

const formatSegment = (segment: string) =>
  segment
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const Breadcrumbs = () => {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  const crumbs = segments.reduce<{ name: string; path: string }[]>((acc, segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`
    acc.push({ name: formatSegment(segment), path })
    return acc
  }, [])

  const items = [{ name: 'Start', path: '/' }, ...crumbs]

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/80">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden className="text-white/40">/</span>}
            <Link to={item.path} className="underline-offset-4 hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
