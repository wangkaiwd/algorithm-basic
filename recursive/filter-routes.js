const routes = [
  {
    name: '首页',
    path: '/home',
    auth: ['home'],
    children: [
      {
        name: '页面1',
        path: '/page1',
        auth: ['page1'],
        children: [
          {
            name: '页面1-1',
            path: '/page1-1',
            auth: ['page1-1'],
            children: [
              {
                name: '页面1-1-1',
                path: '/page1-1-1',
                auth: ['page1-1-1']
              },
              {
                name: '页面1-1-2',
                path: '/page1-1-2',
                auth: ['page1-1-2']
              }
            ]
          }
        ]
      },
      {
        name: '页面2',
        path: '/page2',
        auth: ['page2'],
        children: [
          {
            name: '页面2-1',
            path: '/page2-1',
            auth: ['page2-1'],
            children: [
              {
                name: '页面2-1-1',
                path: '/page2-1-1',
                auth: ['page2-1-1'],
              },
              {
                name: '页面2-1-2',
                path: '/page2-1-2',
                auth: ['page2-1-2'],
              }
            ]
          }
        ]
      },
      {
        name: '页面3',
        path: '/page3',
        auth: ['page3']
      },
    ]
  },
  {
    name: '登录',
    path: '/login',
    children: [],
    auth: ['login']
  }
];

const auths = ['home', 'page1', 'page1-1', 'page1-1-1'];

// 通过isRoot来处理是否需要更改原数组，默认不更改原数组
function filterRoutes (routes, auths, isRoot = true) {
  if (isRoot) {
    routes = JSON.parse(JSON.stringify(routes));
  }
  return routes.filter(route => {
    if (route.children?.length > 0) {
      route.children = filterRoutes(route.children, auths, false);
    }
    return route.auth.some(item => auths.includes(item));
  });
}

console.log(JSON.stringify(filterRoutes(routes, auths), null, 2));
console.log(JSON.stringify(routes, null, 2));