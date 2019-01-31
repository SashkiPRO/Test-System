import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AnalyticsService} from "./analytics.service";
import {AtalyticsImplementation, Metric} from "./analytics-demo.interface";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AnalyticsService, useFactory() {
        // create an implementation that will log the event
        const loggingImplementation: AtalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
          }
        };
// create our new `AnalyticsService` with the implementation
        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  declarations: []
})
export class AnalyticsDemoModule { }
