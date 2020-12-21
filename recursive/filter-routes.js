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

const keepHasAuthRoutes = (routes, auths) => {
  return routes.filter(route => {
    if (route.children) {
      route.children = keepHasAuthRoutes(route.children, auths);
    }
    const path = route.path;
    if (!(path in auths)) {
      return true;
    } else {
      return auths[path];
    }
  });
};
const newRoutes = keepHasAuthRoutes(routes, auths);
console.log('newRoutes', JSON.stringify(newRoutes, null, 2));
