import { Helmet } from 'react-helmet-async'
import {
  SITE_URL,
  SITE_NAME,
  AUTHOR_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
} from '../../data/siteConfig'

// Per-route <head> tags: title, description, canonical URL, and Open
// Graph / Twitter Card metadata for link previews. Note: this runs
// client-side (react-helmet-async), so it updates the tags Google's
// renderer and most modern crawlers see, but a crawler that only reads
// the raw HTML response (no JS execution) will still see the defaults
// baked into public/index.html rather than these per-page values.
const Seo = ({ title, description, path = '/', image, type = 'website' }) => {
  const resolvedTitle = title ? `${title} | ${AUTHOR_NAME}` : DEFAULT_TITLE
  const resolvedDescription = description || DEFAULT_DESCRIPTION
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`
  const resolvedImage = image || DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={resolvedImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedImage} />
    </Helmet>
  )
}

export default Seo
