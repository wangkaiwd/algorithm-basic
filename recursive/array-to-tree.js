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

/**
 * 生成树结构的数组
 * @param arr
 * @return {Array}
 *
 * 注意： 这样操作会更改原数组，如果不想更改原数组，可以先将原数组进行拷贝，然后在生成树结构
 *
 * 思路：
 *  1. 先根据id生成数组每一项的映射，这样可以通过parentId对应的id来直接找到父元素
 *  2. 由于对象的引用关系，为对象添加children属性，这样也会同样更改对应的根节点
 *    （比较正确的添加元素的方法是要递归遍历数结构，找到对应的要添加选项的子元素，然后将添加选项后的最新的子元素返回。之后我们可以用新的子元素来更新旧的子元素）
 *  3.
 */
function arrayToTree (arr) {
  // 根据id和数组的每一项生成数据映射
  const map = arr.reduce((obj, current) => {
    obj[current.id] = current;
    return obj;
  }, {});
  // 结合映射数据以及元数据生成树结构
  return Object.entries(map).reduce((accumulator, [key, val]) => {
    const { parentId } = map[key];
    const parent = map[parentId];
    if (parentId) {
      parent.children = parent.children ? parent.children : [];
      parent.children.push(map[key]);
    } else { // 根节点
      accumulator.push(map[key]);
    }
    return accumulator;
  }, []);
}

const tree = arrayToTree(arr);

/**
 * 结合树节点的深度打印树节点中的name属性
 * @param tree
 * @param depth
 */
function logTreeWithDepth (tree, depth = 0) {
  tree.forEach(item => {
    // 这里要重复空格
    console.log('   '.repeat(depth), item.name);
    if (item.children) {
      logTreeWithDepth(item.children, depth + 1);
    }
  });
}

logTreeWithDepth(tree);
