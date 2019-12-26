import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrdersComponent } from './components/list-users/list-orders.component';
import { AddOrdersComponent } from './components/add-orders/add-orders.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';


const routes: Routes = [
  { path: '', redirectTo: 'list-order', pathMatch: 'full'},
  { path: 'list-order', component: ListOrdersComponent},
  { path: 'view-order', component: ViewOrdersComponent},
  { path: 'edit-order/:id', component: AddOrdersComponent},
  { path: 'add-order', component: AddOrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
