// tree flatten
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];
// 在拍平的过程中也可以加一些属性：如parent(tree component,可以通过while循环找到所有的父节点)
// 拍平的好处：
//  1. 处理为一个对象，成为了线性结构
//  2. 可以把id作为对象的key,然后通过id来找到对应的节点，通过引用关系就可以直接修改源数据
//  3. 在拍平时可以添加它的parent和children,这样就可以很方便的获取到它的所有的父节点和所有的子节点了

function flatTree (node) {
  let map = {};
  node.forEach(child => {
    const { key, children } = child;
    map[key] = child;
    if (Array.isArray(children) && children.length > 0) {
      const subMap = flatTree(children);
      map = { ...map, ...subMap };
    }
  });
  return map;
}

console.log(flatTree(treeData));