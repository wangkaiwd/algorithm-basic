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

//
function filterRoutes (routes, auths) {

}