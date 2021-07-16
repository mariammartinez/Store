import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  form: FormGroup;
  products$: Observable<Product[]>;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
    this.buildForm();
  }

  ngOnInit() {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: [ '', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      shipping: ['', Validators.required]
    });
  }
}
