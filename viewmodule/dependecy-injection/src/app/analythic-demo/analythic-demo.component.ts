import {Component, Inject, OnInit} from '@angular/core';
import {AnalyticsService} from "./analytics.service";

@Component({
  selector: 'app-analythic-demo',
  templateUrl: './analythic-demo.component.html',
  styleUrls: ['./analythic-demo.component.css']
})
export class AnalythicDemoComponent implements OnInit {

  // myUrl:string;
  // constructor(@Inject('API_URL')apiUrl:string) {
  //   this.myUrl=apiUrl;
  // }



    constructor(private analytics: AnalyticsService) {
      this.analytics.record({
        eventName: 'componentCreated',
        scope: 'AnalyticsDemoComponent'
      });
    }

    ngOnInit() {
      this.analytics.record({
        eventName: 'componentOnInit',
        scope: 'AnalyticsDemoComponent'
      });
    }

    buyButtonPressed(product: string) {
      this.analytics.record({
        eventName: 'buyButtonPressed',
        scope: product
      });
    }


}
