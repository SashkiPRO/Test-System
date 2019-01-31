import {PriceService} from "./price.service.1";


export class Product {
  service:PriceService;
  basePrise: number;


  constructor(basePrise: number) {
    this.basePrise = basePrise;
  }

  totalPrice(state: string){
    return this.service.calulateTotalPrice(this.basePrise, state);
  }
}
