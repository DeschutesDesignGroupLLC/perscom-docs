export default {
    title: 'PERSCOM Personnel Management System Documentation',
    description: 'Documentation on how to use PERSCOM.io.',
    cleanUrls: 'with-subfolders',
    lastUpdated: true,
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
                text: 'Guide',
                items: [
                    {text: 'Introduction', link: '/'},
                    {
                        text: 'Getting Started',
                        link: '/getting-started'
                    },
                    {text: 'Pricing', link: '/pricing'},
                ]
            },
            {
                text: 'External Integration',
                items: [
                    {
                        text: 'API',
                        link: '/external-integration/api',
                        items: [
                            {
                                text: 'Documentation',
                                link: 'https://perscom.io/documentation/api'
                            },
                        ]
                    },
                    {
                        text: 'OAuth 2.0',
                        link: '/external-integration/oauth'
                    },
                    {
                        text: 'Widgets',
                        link: '/external-integration/widget/',
                        items: [
                            {
                                text: 'Roster',
                                link: '/external-integration/widget/roster'
                            },
                        ]
                    },
                ]
            },
            {
                text: 'Support',
                items: [
                    {text: 'Community Forums', link: 'https://community.deschutesdesigngroup.com/'},
                    {text: 'Help Desk', link: 'https://support.deschutesdesigngroup.com/'},
                    {text: 'Submit A Ticket', link: 'https://support.deschutesdesigngroup.com/hc/en-us/requests/new'},
                    {text: 'Suggest A Feature', link: 'https://community.deschutesdesigngroup.com/forum/3-feedback-and-ideas/'},
                ]
            },
        ],

        editLink: {
            pattern: 'https://github.com/DeschutesDesignGroupLLC/PERSCOM-3.0-Docs/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 Deschutes Design Group LLC'
        }
    }
}