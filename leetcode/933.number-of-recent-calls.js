function RecentCounter () {
  this.requests = [];
}

RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  const min = t - 3000;
  let count = 0;
  for (let i = 0; i < this.requests.length; i++) {
    const req = this.requests[i];
    if (min <= req && req <= t) {
      count++;
    }
  }
  return count;
};
