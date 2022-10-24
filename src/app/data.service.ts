import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products = [
    { product: 'Wijmo', platform: 'Web' },
    { product: 'ActiveReports', platform: 'Desktop' },
    { product: 'ActiveReportsJS', platform: 'Web' },
    { product: 'ComponentOne', platform: 'Desktop' },
    { product: 'Spread', platform: 'Desktop' },
    { product: 'SpreadJS', platform: 'Web' },
    { product: 'GCDocs', platform: 'Desktop' }
  ];

  agents = [
    { agent: 'Ashlyn Dunlop', region: 'East' },
    { agent: 'Keith Vang', region: 'East' },
    { agent: 'Bobbi Rodrigues', region: 'West' },
    { agent: 'Charli Medina', region: 'West' },
    { agent: 'Kaitlin Salt', region: 'West' },
  ];

  constructor() { }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getOrdersList(count: number) {
    var year = new Date().getFullYear(), data = [];
    for(var i = 0; i < count; i++) {
      let productIdx = this.randomInt(0, 6);
      let agentIdx = this.randomInt(0, 4);
      data.push({
        orderId: this.randomInt(1, 10000),
        platform: this.products[productIdx].platform,
        product: this.products[productIdx].product,
        agent: this.agents[agentIdx].agent,
        region: this.agents[agentIdx].region,
        date: new Date(year - this.randomInt(0, 2), this.randomInt(0, 11), this.randomInt(0, 27)),
        sales: this.randomInt(10, 50),
        downloads: this.randomInt(10, 200),
        revenue: this.randomInt(500, 3500)
      });
    }
    return data;
  }
}