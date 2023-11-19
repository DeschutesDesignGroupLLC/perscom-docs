export default {
  lang: 'en-US',
  title: 'PERSCOM Personnel Management System Documentation',
  description: 'Documentation on the use and integration of PERSCOM.io. Available at https://perscom.io.',

  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&display=swap'
      }
    ]
  ],

  cleanUrls: 'with-subfolders',
  lastUpdated: true,

  markdown: {
    headers: {
      level: [0, 0]
    },
    lineNumbers: false,
    theme: 'css-variables'
  },

  themeConfig: {
    githubUrl: 'https://github.com/DeschutesDesignGroupLLC/perscom-docs',
    siteTitle: 'Docs',
    logo: {
      light: '/logo.svg',
      dark: '/logo.svg'
    },
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
      },
      {
        text: 'Roadmap',
        link: 'https://feedback.perscom.io/'
      },
      {
        text: 'Status',
        link: 'https://status.perscom.io/'
      }
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'About', link: '/about' },
          { text: 'Feedback & Feature Requests', link: '/feedback' },
          { text: 'Find My Organization', link: '/find-my-organization' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Pricing', link: '/pricing' },
          { text: 'Registration', link: '/registration' },
          { text: 'Support', link: '/support' }
        ]
      },
      {
        text: 'Calendar',
        collapsed: true,
        items: [
          { text: 'Calendars', link: '/components/calendars' },
          { text: 'Events', link: '/components/events' }
        ]
      },
      {
        text: 'Communications',
        collapsed: true,
        items: [{ text: 'Newsfeed Items', link: '/components/newsfeed-items' }]
      },
      {
        text: 'Forms',
        collapsed: true,
        items: [
          { text: 'Forms', link: '/components/forms' },
          { text: 'Submissions', link: '/components/submissions' }
        ]
      },
      {
        text: 'Organization',
        collapsed: true,
        items: [
          { text: 'Announcements', link: '/components/announcements' },
          { text: 'Awards', link: '/components/awards' },
          { text: 'Documents', link: '/components/documents' },
          { text: 'Groups', link: '/components/groups' },
          { text: 'Positions', link: '/components/positions' },
          { text: 'Qualifications', link: '/components/qualifications' },
          { text: 'Ranks', link: '/components/ranks' },
          { text: 'Specialties', link: '/components/specialties' },
          { text: 'Statuses', link: '/components/statuses' },
          { text: 'Tasks', link: '/components/tasks' },
          { text: 'Units', link: '/components/units' }
        ]
      },
      {
        text: 'Personnel',
        collapsed: true,
        items: [{ text: 'Users', link: '/components/users' }]
      },
      {
        text: 'Records',
        collapsed: true,
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
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/external-integration/overview'
          },
          {
            text: 'API',
            collapsed: true,
            link: '/external-integration/api',
            items: [
              { text: 'Documentation', link: 'https://perscom.io/documentation/api' },
              { text: 'OpenAPI 3.0 Spec', link: 'https://api.perscom.io/v1/spec.yaml' }
            ]
          },
          {
            text: 'CLI',
            link: '/external-integration/cli'
          },
          {
            text: 'OAuth 2.0',
            collapsed: true,
            link: '/external-integration/oauth',
            items: [{ text: 'OpenID Connect', link: '/external-integration/oauth/oidc' }]
          },
          {
            text: 'Webhooks',
            link: '/external-integration/webhooks'
          },
          {
            text: 'Widgets',
            collapsed: true,
            link: '/external-integration/widgets',
            items: [
              { text: 'Roster', link: '/external-integration/widgets/roster' },
              { text: 'Awards', link: '/external-integration/widgets/awards' },
              { text: 'Calendar', link: '/external-integration/widgets/calendar' },
              { text: 'Forms', link: '/external-integration/widgets/forms' },
              { text: 'Newsfeed', link: '/external-integration/widgets/newsfeed' },
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
          { text: 'Feature Requests', link: 'https://feedback.perscom.io/b/features-requests' },
          { text: 'Feedback', link: 'https://feedback.perscom.io/b/feedback' },
          { text: 'Submit A Ticket', link: 'https://www.deschutesdesigngroup.com/support/new' },
          { text: 'System Status', link: 'https://status.perscom.io' }
        ]
      }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'SD2GIHU4GJ',
        apiKey: 'f4d68c05a8a9f031c3082d748d523210',
        indexName: 'perscom',
        placeholder: 'Search Docs...'
      }
    },

    editLink: {
      pattern: 'https://github.com/DeschutesDesignGroupLLC/perscom-docs/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Deschutes Design Group LLC'
    }
  }
}
