/* Title: invoice-dialog.component.ts
* Author: Professor Krasso
* Redactor:Oksana Kustova
* Date: 3/6/2022
* Description: Invoice dialog component
*/

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Invoice } from '../customer-order/invoice';

@Component({
 selector: 'invoice-dialog',
 templateUrl: './invoice-dialog.component.html',
 styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit {
 // Component variables.
 invoice: Invoice;

 constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
   this.invoice = data.invoice; // set the passed-in data object's invoice property to the local invoice variable.
   console.log(this.invoice); // Display the contents of the invoice object to the console window.
 }

 ngOnInit(): void {
 }

}
