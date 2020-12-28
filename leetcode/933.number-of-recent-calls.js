function RecentCounter () {
  this.requests = [];
}

// 数组是有序的，每次调用ping方法时，将数组中不符合要求的时间移除掉，最终返回数组的长度即可
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  while (this.requests[0] < t - 3000) {
    this.requests.shift();
  }
  return this.requests.length;
};
