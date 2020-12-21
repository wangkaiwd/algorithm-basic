const arr = [
  { 'id': 1, 'parentId': 0, name: 'A' },
  { 'id': 4, 'parentId': 2, name: 'B' },
  { 'id': 3, 'parentId': 1, name: 'C' },
  { 'id': 5, 'parentId': 0, name: 'D' },
  { 'id': 6, 'parentId': 0, name: 'E' },
  { 'id': 2, 'parentId': 1, name: 'F' },
  { 'id': 7, 'parentId': 4, name: 'G' },
  { 'id': 8, 'parentId': 1, name: 'H' }
];

// 生成数据映射
const map = arr.reduce((obj, current) => {
  obj[current.id] = current;
  return obj;
}, {});
const tree = [];
Object.keys(map).forEach(key => {
  const val = map[key];
  const parentId = val.parentId;
  // parentId 为0，说明是根节点
  if (parentId) { // 不是根节点,找到它的父节点，将其作为父节点的子节点
    map[parentId].children = map[parentId].children ? map[parentId].children : [];
    map[parentId].children.push(val);
  } else { // 根节点
    tree.push(val);
  }
});
// const tree = Object.entries(map).reduce((accumulator, [key, val]) => {
//   const { parentId } = map[key];
//   if (parentId) {}
// }, []);

function log (tree, depth = 0) {
  tree.forEach(item => {
    // 这里要重复空格
    console.log('   '.repeat(depth), item.name);
    if (item.children) {
      log(item.children, depth + 1);
    }
  });
}

log(tree);
