// 过滤掉路由列表中没有权限的路由

const routes = [
  {
    name: '首页',
    path: '/home',
    children: [
      {
        name: '页面1',
        path: '/page1',
        children: [
          {
            name: '页面1-1',
            path: '/page1-1',
            children: [
              {
                name: '页面1-1-1',
                path: '/page1-1-1',
              },
              {
                name: '页面1-1-2',
                path: '/page1-1-2',
              }
            ]
          }
        ]
      },
      {
        name: '页面2',
        path: '/page2',
        children: [
          {
            name: '页面2-1',
            path: '/page2-1',
            children: [
              {
                name: '页面2-1-1',
                path: '/page2-1-1',
              },
              {
                name: '页面2-1-2',
                path: '/page2-1-2',
              }
            ]
          }
        ]
      },
      {
        name: '页面3',
        path: '/page3',
      },
    ]
  },
  {
    name: '登录',
    path: '/login',
    children: []
  }
];
const auths = { '/page2-1-2': false, '/page1-1-1': false, '/login': false };

// 替换所有元素中的path字段为value
const replaceFields = (routes) => { // 用想要的字段替换当前传入的节点，并将替换后新的节点返回
  return routes.map(route => {
    route.raw = route;
    route.value = route.path;
    delete route.path;
    if (route.children) {
      route.children = replaceFields(route.children);
    }
    return route;
  });
};
const newRoutes = replaceFields(routes);
