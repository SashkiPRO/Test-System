import {Injectable} from "@angular/core";
import {AtalyticsImplementation, Metric} from "./analytics-demo.interface";


@Injectable()
export class AnalyticsService {

  constructor(private implementation:AtalyticsImplementation){

  }

  record(metric:Metric){
    this.implementation.recordEvent(metric);
  }
}
