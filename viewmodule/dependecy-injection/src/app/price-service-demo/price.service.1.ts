export class PriceService {


  constructor() {
  }

  calulateTotalPrice(basePrice: number, state: string){
    const tax = Math.random();
    return basePrice + tax;
  }
}
