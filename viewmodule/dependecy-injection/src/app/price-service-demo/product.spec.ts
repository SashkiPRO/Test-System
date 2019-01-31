import {MockPriceService} from "./price.service.mock";
import {Product} from "./product.model";


describe('Product', ()=>{
  let product;

  beforeEach(()=>{
    const service = new MockPriceService();
    product = new Product(service,11.00);
  });

  describe('price', ()=>{
    it('is calculated based on the basePrice and state',  ()=> {
      expect(product.totalPrice('FL')).toBe(11.66);
    });
  });
});
