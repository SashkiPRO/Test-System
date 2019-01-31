export interface Metric {
  eventName: string;
  scope: string;
}

export interface AtalyticsImplementation {
  recordEvent(metric:Metric):void;
}
