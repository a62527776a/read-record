module.exports = {
    base: '/read-record/',
    title: '书籍阅读笔记',
    description: '记录阅读，沉淀思考',
    themeConfig: {
        sidebarDepth: 3,
            sidebar: [
                {
                    title: '介绍',   // 必要的
                    path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                },
                {
                    title: '《计算机网络》',   // 必要的
                    collapsable: false,
                    children: [
                        {
                            title: '数据链路层',   // 必要的
                            path: '/computer-networks/3',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        },
                        {
                            title: '网络层',   // 必要的
                            path: '/computer-networks/5',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        }
                    ]
                }
            ]
    }
}
  