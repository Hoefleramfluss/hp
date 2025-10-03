import { useEffect } from 'react'

export type JsonLdProps = {
  data: Record<string, unknown>
}

export const JsonLd = ({ data }: JsonLdProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

export const OrgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VoXon.ai',
  url: 'https://voxon.app',
  logo: 'https://voxon.app/assets/logo.png',
  address: { '@type': 'PostalAddress', addressCountry: 'AT' },
  sameAs: [] as string[],
}

export const WebSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://voxon.app',
  name: 'VoXon.ai – Voicebots & KI-Voice-Agents',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://voxon.app/suche?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const makeBreadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
