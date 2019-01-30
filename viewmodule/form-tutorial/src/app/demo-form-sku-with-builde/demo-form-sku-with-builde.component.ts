import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-demo-form-sku-with-builde',
  templateUrl: './demo-form-sku-with-builde.component.html',
  styleUrls: ['./demo-form-sku-with-builde.component.css']
})
export class DemoFormSkuWithBuildeComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ["ABC123"]
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
