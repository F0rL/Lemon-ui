module.exports = {
  title: 'Yezi-ui',
  description: '一个简易、便捷的 UI 框架',
  themeConfig: {
    themeConfig: {
      displayAllHeaders: true
    },
    nav: [
      { text: 'Home', link: '/introduction/' },
      { text: 'Guide', link: '/install/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/introduction/',
      '/install/',
      '/get-start/',
      {
        title: '组件',
        children: [
          '/components/basis',
          '/components/form',
          '/components/layout',
          '/components/others',
        ]
      }
    ],
  },
  markdown: {
    lineNumbers: true
  }
}