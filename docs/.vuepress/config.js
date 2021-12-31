
module.exports = {
    base: '/blog/',
    title: 'Keith Blog',
    description: 'keith blog',
    themeConfig: {
        repo: 'https://github.com/KeithLier/blog',
        repoLabel: 'GitHub',
        nav: [
            { text: '主页', link: '/' },
            { text: '个人信息', link: '/personal/' },            
            { text: 'FirstBlog', link: '/blog/' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
          ]
      
    }

  }
  