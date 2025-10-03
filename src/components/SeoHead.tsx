import { useEffect } from 'react'

export type SeoHeadProps = {
  title: string
  description: string
  url: string
  image?: string
  noindex?: boolean
  canonical?: string
  lang?: string
}

const ensureMeta = (attribute: 'name' | 'property', value: string, content: string) => {
  const selector = `meta[${attribute}="${value}"]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const ensureLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const SeoHead = ({
  title,
  description,
  url,
  image,
  noindex,
  canonical,
  lang = 'de-AT',
}: SeoHeadProps) => {
  useEffect(() => {
    document.title = title
    document.documentElement.lang = lang

    ensureMeta('name', 'description', description)
    ensureMeta('property', 'og:type', 'website')
    ensureMeta('property', 'og:title', title)
    ensureMeta('property', 'og:description', description)
    ensureMeta('property', 'og:url', url)
    if (image) {
      ensureMeta('property', 'og:image', image)
    }

    ensureMeta('name', 'twitter:card', 'summary_large_image')
    ensureMeta('name', 'twitter:title', title)
    ensureMeta('name', 'twitter:description', description)
    if (image) {
      ensureMeta('name', 'twitter:image', image)
    }

    if (canonical) {
      ensureLink('canonical', canonical)
    }

    if (noindex) {
      ensureMeta('name', 'robots', 'noindex,nofollow')
    } else {
      const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
      if (robots && robots.content === 'noindex,nofollow') {
        document.head.removeChild(robots)
      }
    }
  }, [title, description, url, image, noindex, canonical, lang])

  return null
}

export default SeoHead
