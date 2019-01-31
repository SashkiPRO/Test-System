import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Http, HttpModule} from "@angular/http";
import {AnalyticsService} from "./analytics.service";
import {AtalyticsImplementation, Metric} from "./analytics-demo.interface";


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    {provide: 'API_URL', useValue: 'http://devserver.com'},
    {
      provide: AnalyticsService, deps:[Http, 'API_URL'],
      useFactory(http: Http, apiUrl: string) {
        const loggingImplementation: AtalyticsImplementation = {
          recordEvent(metric: Metric): void {
            console.log('The metric is:', metric);
            console.log('Sending to: ', apiUrl);
          }
        };
        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  declarations: []
})
export class AnalyticsDemoModule { }
