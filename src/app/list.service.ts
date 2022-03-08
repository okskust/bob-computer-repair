/**
 * Title: menu.service.ts
 * Author: Professor Krasso
 * Redactor:Oksana Kustova
 * Date: 3/6/2022
 * Description: Menu service.
 */

import { Injectable } from '@angular/core';
import { Services } from './customer-order/service.interface';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  /**
   * Get beverages.
   * @returns {Service[]} services - Array of Service objects.
   */

  getServices(): Services[] {
    const services: Services[] = [
      {
        title: 'Password Reset',
        amount: 39.99,
        checked: false,
      },
      {
        title: 'Spyware Removal',
        amount: 99.99,
        checked: false,
      },
      {
        title: 'RAM Upgrade',
        amount: 129.99,
        checked: false,
      },
      {
        title: 'Software Installation',
        amount: 49.99,
        checked: false,
      },
      {
        title: 'Tune-up',
        amount: 89.99,
        checked: false,
      },
      {
        title: 'Keyboard Cleaning',
        amount: 45.00,
        checked: false,
      },
      {
        title: 'Disk Clean-up',
        amount: 149.00,
        checked: false,
      },
    ];

    return services;
  }
}
