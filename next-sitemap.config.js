const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://icodelabs.co';

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  generateSitemap: true,
  exclude: ['/api/*'],
};