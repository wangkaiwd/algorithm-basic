class RecentCounter {
  private queue: number[] = [];
  private threshold: number = 3000;

  ping (t: number): number {
    this.queue.push(t);
    const min = t - this.threshold;
    while (this.queue[0] < min) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}

const recentCounter = new RecentCounter();
recentCounter.ping(1);
recentCounter.ping(100);
recentCounter.ping(3001);
recentCounter.ping(3002);
