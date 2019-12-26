import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../_service/crud.service';

import { Order } from '../../_interface/orders.inerface';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

orders: Order[] = [];
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getOrders();
        }

  getOrders() {
    this.crudService.getOrders().subscribe((orderData) => {
      this.orders = orderData;
      console.log(this.orders);
    });
  }

  deleteOrder(id: number, i: number) {
    this.crudService.delteOrder(id).subscribe(() => {
      this.orders.splice(i, 1);
    });
  }
}
