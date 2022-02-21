## Algorithm Study

> * [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
> * [javascript-algorithm](https://github.com/trekhleb/javascript-algorithms)

### technology stack
* typescript
* webstorm

[Using ts-node](https://www.jetbrains.com/help/webstorm/running-and-debugging-typescript.html#ws_ts_run_debug_server_side_ts_node)
 

### Big O notation
* O(1): Constant Complexity 常数复杂度
* O(log n): Logarithmic Complexity 对数复杂度
* O(n): Linear Complexity 线性时间复杂度
* O(n^2): N square Complexity 平方
* O(n^3): N square Complexity 立方
* O(2^n): Exponential Growth 指数
* O(n!): Factorial 阶乘

![](https://www.shuxuele.com/algebra/images/logarithm-exponent.svg)
![](https://cdn.jsdelivr.net/gh/wangkaiwd/drawing-bed/20220221171052.png)

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

快速排序, 归并排序：O(nlog(n))

![number of operations for given Big-O Notation](https://miro.medium.com/max/2000/1*HwLR-DKk0lYNEMpkH475kg.png)
