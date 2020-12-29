const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/brookspoltl/Documents/coding/portfoliov2/.cache/dev-404-page.js"))),
  "component---src-components-subcat-js": hot(preferDefault(require("/Users/brookspoltl/Documents/coding/portfoliov2/src/components/subcat.js"))),
  "component---src-components-subcatarticles-js": hot(preferDefault(require("/Users/brookspoltl/Documents/coding/portfoliov2/src/components/subcatarticles.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/brookspoltl/Documents/coding/portfoliov2/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/brookspoltl/Documents/coding/portfoliov2/src/pages/about.js"))),
  "component---src-pages-articles-js": hot(preferDefault(require("/Users/brookspoltl/Documents/coding/portfoliov2/src/pages/articles.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/brookspoltl/Documents/coding/portfoliov2/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/brookspoltl/Documents/coding/portfoliov2/src/templates/blog-post.js")))
}

