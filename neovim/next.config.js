const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  unstable_defaultShowCopyCode: true,
  unstable_readingTime: true,
});

const config = {
  basePath: '/neovim',
  experimental: {
    // newNextLinkBehavior: true,
    browsersListForSwc: true,
    // legacyBrowsers: false,
  },
  async redirects() {
    return [
      {
        source: '/tags',
        destination: '/blog',
        permanent: false,
      },
    ];
  },
};

module.exports = withNextra(config);
