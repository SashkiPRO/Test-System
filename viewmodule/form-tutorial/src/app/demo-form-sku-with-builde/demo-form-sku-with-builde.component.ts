import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-form-sku-with-builde',
  templateUrl: './demo-form-sku-with-builde.component.html',
  styleUrls: ['./demo-form-sku-with-builde.component.css']
})
export class DemoFormSkuWithBuildeComponent implements OnInit {
  myForm: FormGroup;
  sku:AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['',Validators.required]
    });
    this.sku=this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }


}
