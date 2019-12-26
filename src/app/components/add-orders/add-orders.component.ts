import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/_service/crud.service';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss']
})
export class AddOrdersComponent implements OnInit {
  orderForm: FormGroup;
  id: number = this.route.snapshot.params.id;
  constructor(private route: ActivatedRoute, private crudService: CrudService, private router: Router,  private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();
    this.getOrder();
  }

setForm() {
  this.orderForm = this.fb.group({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    pincode: '',
    products: this.fb.array([])
  });
}

getProductGroup(): FormGroup {
  return this.fb.group({
      name: '',
      qty: '',
      price: '',
      total: ''
      });
}

getOrder() {
  if (this.id) {
    return this.crudService.getOrder(this.id).subscribe((orderData) => {
      orderData.products.forEach(() => {
      this.addProduct();
      });
      this.orderForm.patchValue(orderData);
  });
  } else {
    this.addProduct();
  }
}

addProduct(): void {
  let productArray = this.orderForm.get('products') as FormArray;
  productArray.push(this.getProductGroup());
  console.log(productArray);
}

deleteProduct(i: number): void {
  let productArray = this.orderForm.get('products') as FormArray;
  productArray.removeAt(i);
  console.log(productArray);
}

submit() {
  if (this.id) {
    this.crudService.updateOrder(this.id, this.orderForm.value).subscribe(() => {
      this.router.navigate(['/list-order']);
    });
  } else {
    this.crudService.addOrder(this.orderForm.value).subscribe(() => {
      this.router.navigate(['/list-order']);
    });
  }
}
}
