module.exports = {
    base: "/posts/",
    title: 'Hello VuePress',
    description: 'Just playing around',
    dest: 'public',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器'
        },
    },
    theme: undefined,
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            {text: '首页', link: '/'},
            {text: 'Guide', link: '/guide/', target: '_blank'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            },
            {
                text: 'Languages2',
                items: [
                    {
                        text: 'Group1', items: [
                            {text: 'Chinese', link: '/language/chinese/'},
                            {text: 'Japanese', link: '/language/japanese/'}
                        ]
                    },
                    {
                        text: 'Group2', items: [
                            {text: 'Chinese', link: '/language/chinese/'},
                            {text: 'Japanese', link: '/language/japanese/'}
                        ]
                    }
                ]
            },
            {text: 'External', link: 'https://baidu.com', target: '_self', rel: ''}

        ],
        navbar: true,
        sidebar: 'auto',
        displayAllHeaders: false,// 默认 false
        activeHeaderLinks: false, // 默认值：true
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "最后更新于",
        nextLinks: true,// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        prevLinks: true,// 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        smoothScroll: true,
    },
    cache: true,
    permalink: "/:year/:month/:day/:slug",
    plugins: [
        [
            "@vuepress/back-to-top",
            true
        ],
        [
            "@vuepress/medium-zoom",
            true
        ],
        ['@vuepress/nprogress']
    ]
}
