import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Nurok Docs',
  tagline: 'Guides and reference for building on Nurok',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.nurok.ai',
  // Custom domain serves from the root, so no /<projectName>/ prefix.
  baseUrl: '/',

  organizationName: 'nurokhq',
  projectName: 'docs',

  // A broken internal link should fail CI, not ship.
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // The domain is already docs.nurok.ai — a /docs/ path prefix would stutter.
          routeBasePath: '/',
          editUrl: 'https://github.com/nurokhq/docs/tree/main/',
          // Agent working files live under docs/superpowers/ and are gitignored. This
          // also keeps them out of a local build, which gitignoring alone would not.
          exclude: ['superpowers/**'],
        },
        // A documentation site, not a publication.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Loam is a light theme and defines no dark palette, so the switch is disabled
    // rather than filled in with invented colours. See src/css/custom.css.
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      // The logo carries the wordmark; the title reads as a mono eyebrow beside it.
      title: 'Docs',
      logo: {
        alt: 'Nurok',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://nurok.ai',
          label: 'Use Nurok',
          position: 'right',
        },
        {
          href: 'https://github.com/nurokhq/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'Nurok',
          items: [
            {
              label: 'Use Nurok',
              href: 'https://nurok.ai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nurokhq/docs',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Nurok Technology Inc`,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
