/**
 * Title: invoice.ts
 * Author: Professor Krasso
 * Redactor:Oksana Kustova
 * Date: 3/6/2022
 * Description: Invoice class
 */

import { ServiceItem } from './service-item.interface';

export class Invoice {
  // Class variables.
  serviceItems: ServiceItem[]; // Variable for storing ServiceItem objects.
  partsValue: number; // variable for the invoice's parts value.
  hoursAmount: number; // variable for the invoice's hours amount.

  constructor() {
    this.serviceItems = []; // Set the serviceItems variable to an empty array.
    this.partsValue = 0; // Set the variable to 0.
    this.hoursAmount = 0; // Set the variable to 0.
  }

  /**
   * Add service item
   * @param {ServiceItem} serviceItem
   */
  addServiceItem(serviceItem: ServiceItem): void {
    this.serviceItems.push(serviceItem);
  }

  /**
   * Get service total.
   * @returns {number} total - Sum of the service item totals.
   */
  getServiceTotal(): number {
    let total: number = 0;

    /**
     * Iterate over the serviceItems array and create a running total of
     * the stored serviceItem amount.
     */
    for (let serviceItem of this.serviceItems) {
      total += serviceItem.amount; // Create a running total of the serviceItem.amount.
    }

    return total;
  }

  /**
   * Get parts value.
   * @returns {number} partsValue - The partsValue value.
   */
  getPartsValue(): number {
    return this.partsValue;
  }
  /**
   * Get hours amount.
   * @returns {number} hoursAmount - The hoursAmount value.
   */
  getHoursAmount(): number {
    return this.hoursAmount * 50;
  }

  /**
   * Get invoice amount.
   * @returns {number} total - Sum of the service item totals and fees.
   */
  getInvoiceTotal(): number {
    const serviceTotal: number = this.getServiceTotal();
    const parts: number = this.getPartsValue();
    const work: number = this.getHoursAmount();
    const total: number = Number(serviceTotal) + Number(parts) + Number(work); // Calculate the invoice's total

    return total;
  }
}
