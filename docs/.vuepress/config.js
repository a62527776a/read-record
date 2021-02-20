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
                },
                {
                    title: '《计算机组成-结构化方法》',   // 必要的
                    collapsable: false,
                    children: [
                        {
                            title: '计算机系统组成',   // 必要的
                            path: '/structured-computer-organization/2',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        },
                        {
                            title: '数字逻辑层',   // 必要的
                            path: '/structured-computer-organization/3',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        },
                        {
                            title: '微体系结构层',   // 必要的
                            path: '/structured-computer-organization/4',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        },
                        {
                            title: '指令系统层',   // 必要的
                            path: '/structured-computer-organization/5',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        },
                        {
                            title: '操作系统层',   // 必要的
                            path: '/structured-computer-organization/6',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        }
                    ]
                },
                {
                    title: '《算法 第四版》',   // 必要的
                    collapsable: false,
                    children: [
                        {
                            title: '排序',   // 必要的
                            path: '/algorithms/2',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        }
                    ]
                }
            ]
    }
}
  