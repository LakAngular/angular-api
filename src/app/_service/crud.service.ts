import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {  Order } from '../_interface/orders.inerface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  BASEPATH = 'http://localhost:3000/';

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.BASEPATH}orders`);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.BASEPATH}orders/${id}`);
  }

  updateOrder(id: number, order: Order): Observable<any> {
    return this.http.put<Order>(`${this.BASEPATH}orders/${id}`, order);
  }

  addOrder(order: Order): Observable<any> {
    return this.http.post<Order>(`${this.BASEPATH}orders`, order);
  }

  delteOrder(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BASEPATH}orders/${id}`);
  }
}
