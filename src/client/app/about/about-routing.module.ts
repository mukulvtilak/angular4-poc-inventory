import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'about', component: AboutComponent }
      , { path: 'invoice', component: InvoiceComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
