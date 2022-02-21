class RecentCounter {
  private queue: number[] = [];
  private threshold: number = 3000;

  ping (t: number): number {
    this.queue.push(t);
    const min = t - this.threshold;
    let i = 0;
    while (i < this.queue.length) {
      const current = this.queue[i];
      if (current < min) {
        this.queue.shift();
      } else {
        break;
      }
    }
    return this.queue.length;
  }
}

const recentCounter = new RecentCounter();
recentCounter.ping(1);
recentCounter.ping(100);
recentCounter.ping(3001);
recentCounter.ping(3002);
