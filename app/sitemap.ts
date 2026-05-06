import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beautybylys.com' // Remplacez par votre domaine réel si différent

  const routes = [
    '',
    '/experience',
    '/realisations',
    '/realisations/femmes',
    '/realisations/hommes',
    '/realisations/ongleries',
    '/univers',
    '/reservation',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
