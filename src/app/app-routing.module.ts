/**
 * Title: app-routing.modules.ts
 * Author: Oksana Kustova
 * Date: 3/6/2022
 * Description: Routing for the app.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOrderComponent } from './customer-order/customer-order.component'
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerOrderComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
