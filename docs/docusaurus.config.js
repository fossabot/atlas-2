module.exports = {
  title: 'Atlas Documentation',
  tagline: 'Mapping library for jobs.',
  url: 'https://chronark.github.ui/atlas',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'chronark', // Usually your GitHub org/user name.
  projectName: 'atlas', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Atlas Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {to: 'docs/typedoc/globals', label: 'API', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Andreas Thomas. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/chrnark/atlas/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
