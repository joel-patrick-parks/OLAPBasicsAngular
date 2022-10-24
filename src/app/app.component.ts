import { Component } from '@angular/core';
import { DataService } from './data.service';

import * as wjOlap from '@grapecity/wijmo.olap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ng: wjOlap.PivotEngine;

  constructor(private dataService: DataService) {
    this.ng = new wjOlap.PivotEngine({
      itemsSource: dataService.getOrdersList(1000),
      fields:[
        { binding: 'date', header: 'Quarter', format: '\"Q\"q yyyy' },
        { binding: 'date', header: 'Month', format: 'MMMM' },
        { binding: 'agent', header: 'Agent' },
        { binding: 'region', header: 'Region' },
        { binding: 'platform', header: 'Platform' },
        { binding: 'product', header: 'Product' },
        { binding: 'sales', header: 'Sales', format: 'c2' },
        { binding: 'downloads', header: 'Downloads', format: 'n0' },
        { binding: 'revenue', header: 'Revenue', format: 'c2' },
      ]
    });
  }
}
