import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Exemple de dossier à ne pas indexer si besoin
    },
    sitemap: 'https://beautybylys.com/sitemap.xml',
  }
}
