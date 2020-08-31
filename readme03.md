## 时间和空间复杂度
### Big O notation
* O(1): Constant Complexity 常数复杂度
* O(log n): Logarithmic Complexity 对数复杂度
* O(n): Linear Complexity 线性时间复杂度
* O(n^2): N square Complexity 平方
* O(n^3): N square Complexity 立方
* O(2^n): Exponential Growth 指数
* O(n!): Factorial 阶乘

例子：

O(N)
```javascript
for(let i = 0; i < n; i++) {
  console.log(i)
}
```

O(N^2)
```javascript
for(let i = 0; i <= n; i++) {
  for(let j = 0; j <= n; j++) {
    console.log(`i:${i}, j:${j}`)
  }
}
```

O(log(n))
```javascript
for(let i = 0; i < n; i= i*2) {
  console.log(i);
}
```

O(k^n)
```javascript
function fib(n){
  if(n <= 2) { return n }
  return fib(n-1) + fib(n-2)
}
```

![number of operations for given Big-O Notation](https://miro.medium.com/max/2000/1*HwLR-DKk0lYNEMpkH475kg.png)


计算递归的时间复杂度：
* 例子：斐波那契数列
* 主定理
* application to common algorithms
  * Binary search
  * Binary tree traversal
  * Optimal sorted matrix search
  * Merge sort
