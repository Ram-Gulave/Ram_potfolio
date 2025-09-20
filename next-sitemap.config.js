// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ramgulaveportfolio.netlify.app', // Your domain
  generateRobotsTxt: true, // Generates robots.txt automatically
  sitemapSize: 5000,        // Split large sitemaps if needed
  changefreq: 'weekly',     // Default change frequency
  priority: 0.8,            // Default priority
};
