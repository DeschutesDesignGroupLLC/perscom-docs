/** @format */

export default {
  lang: 'en-US',
  title: 'PERSCOM Personnel Management System Documentation',
  description: 'Documentation on how to use PERSCOM.io.',

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  cleanUrls: 'with-subfolders',
  lastUpdated: true,

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    siteTitle: 'Docs',
    logo: '/logo.svg',
    nav: [
      {
        text: 'PERSCOM.io Home',
        link: 'http://perscom.io'
      },
      {
        text: 'Register',
        link: 'https://perscom.io/register'
      },
      {
        text: 'Pricing',
        link: 'https://perscom.io/#pricing'
      }
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'About PERSCOM', link: '/about' },
          { text: 'Features', link: '/features' },
          { text: 'Find My Organization', link: '/find-my-organization' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Pricing', link: '/pricing' },
          { text: 'Registration', link: '/registration' },
          { text: 'Support', link: '/support' }
        ]
      },
      {
        text: 'Components',
        collapsed: false,
        items: [
          { text: 'Announcements', link: '/components/announcements' },
          { text: 'Awards', link: '/components/awards' },
          { text: 'Documents', link: '/components/documents' },
          { text: 'Positions', link: '/components/positions' },
          { text: 'Qualifications', link: '/components/qualifications' },
          { text: 'Ranks', link: '/components/ranks' },
          { text: 'Specialties', link: '/components/specialties' },
          { text: 'Statuses', link: '/components/statuses' },
          { text: 'Tasks', link: '/components/tasks' },
          { text: 'Units', link: '/components/units' },
          { text: 'Users', link: '/components/users' }
        ]
      },
      {
        text: 'Records',
        collapsed: false,
        items: [
          { text: 'Assignment', link: '/records/assignment' },
          { text: 'Award', link: '/records/award' },
          { text: 'Combat', link: '/records/combat' },
          { text: 'Qualification', link: '/records/qualification' },
          { text: 'Rank', link: '/records/rank' },
          { text: 'Service', link: '/records/service' },
          { text: 'Status', link: '/records/status' }
        ]
      },
      {
        text: 'External Integration',
        collapse: false,
        items: [
          {
            text: 'API',
            link: '/external-integration/api',
            items: [{ text: 'Documentation', link: 'https://perscom.io/documentation/api' }]
          },
          { text: 'OAuth 2.0', link: '/external-integration/oauth' },
          {
            text: 'Widgets',
            link: '/external-integration/widgets',
            items: [
              { text: 'Roster', link: '/external-integration/widgets/roster' },
              { text: 'Awards', link: '/external-integration/widgets/awards' },
              { text: 'Qualifications', link: '/external-integration/widgets/qualifications' },
              { text: 'Ranks', link: '/external-integration/widgets/ranks' }
            ]
          }
        ]
      },
      {
        text: 'Support',
        collapsed: true,
        items: [
          { text: 'Community Forums', link: 'https://community.deschutesdesigngroup.com/' },
          { text: 'Help Desk', link: 'https://support.deschutesdesigngroup.com/' },
          { text: 'Submit A Ticket', link: 'https://support.deschutesdesigngroup.com/hc/en-us/requests/new' },
          { text: 'Suggest A Feature', link: 'https://community.deschutesdesigngroup.com/forum/3-feedback-and-ideas/' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/DeschutesDesignGroupLLC/PERSCOM-3.0-Docs/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Deschutes Design Group LLC'
    },

    algolia: {
      appId: 'SD2GIHU4GJ',
      apiKey: 'f4d68c05a8a9f031c3082d748d523210',
      indexName: 'perscom'
    }
  }
}
