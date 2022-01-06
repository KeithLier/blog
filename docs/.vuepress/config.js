
module.exports = {
    base: '/blog/',
    title: 'Keith Blog',
    description: 'keith blog',
    themeConfig: {
        repo: 'https://github.com/KeithLier/blog',
        repoLabel: 'GitHub',
        nav: [
            { text: '主页', link: '/' },
            { text: '个人简介', link: '/personal/' },            
            { text: '分享', link: '/blog/' }
        ],
        sidebar: [
            ['/', '主页'],
            ['/personal/', '个人简介'],
            ['/blog/', '分享']
          ]
      
    }

  }
  