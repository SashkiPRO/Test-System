import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-form-sku-with-builde',
  templateUrl: './demo-form-sku-with-builde.component.html',
  styleUrls: ['./demo-form-sku-with-builde.component.css']
})
export class DemoFormSkuWithBuildeComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator
      ])]
    });
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to:', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form);
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }


}

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}
