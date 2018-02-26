import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutComponent, InvoiceComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
