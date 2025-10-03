import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const BASE_URL = 'https://voxon.app'
const ROUTES = ['/', '/loesungen/voicebot', '/branchen/gastro']

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES.map((route) => {
  const loc = route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`
  const priority = route === '/' ? '1.0' : '0.8'
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}).join('\n')}\n</urlset>`

const outputPath = resolve('dist/sitemap.xml')

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, xml, 'utf8')

console.log('sitemap.xml generated at', outputPath)
