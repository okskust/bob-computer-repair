import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Services } from './service.interface';
import { Invoice } from './invoice';
import { ListService } from './../list.service';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss'],
})
export class CustomerOrderComponent implements OnInit {
  services: Services[];
  invoice: Invoice;

  constructor(private dialog: MatDialog, private listService: ListService) {
    this.services = listService.getServices();
    this.invoice = new Invoice();
  }

  ngOnInit(): void {}

  /**
   * Clears the invoice.
   * @returns {void}
   */
  clearInvoice(): void {
    /**
     * Iterate over the services array and set each objects checked property to false.
     */
    for (let item of this.services) {
      item.checked = false;
    }

    this.invoice = new Invoice();
  }

  /**
   * Handles the forms submission.
   * @returns {void}
   */
  submit(): void {
    for (let item of this.services) {
      if (item.checked) {
        this.invoice.addServiceItem(item);
      }
    }

    /**
     * Open the InvoiceComponent, passing-in the invoice object, set the disableClose to true,
     * and set the width to 800 pixels.
     */
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      data: {
        invoice: this.invoice,
      },
      disableClose: true,
      width: '800px',
    });

    /**
     * Subscribe to the event triggered by the InvoiceComponent, display an alert message,
     * and call the clearBill() function to reset the form.
     */
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        alert('Your order has been processed!');
        this.clearInvoice();
      } else {
        alert('Your order has been canceled.');
        this.clearInvoice();
      }
    });
  }
}
