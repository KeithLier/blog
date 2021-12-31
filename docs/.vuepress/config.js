
module.exports = {
    base: '/blog/',
    title: 'blog',
    description: 'keith blog',
    themeConfig: {
        repo: 'https://github.com/KeithLier/blog',
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
          ]
      
    }

  }
  