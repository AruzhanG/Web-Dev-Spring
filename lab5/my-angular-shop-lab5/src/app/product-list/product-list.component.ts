import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

interface ProductItem {
  id: number;
  name: string;
  price: number;
  likes: number;
  image: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="product-list">
      <app-product-item
        *ngFor="let product of products"
        [product]="product"
        (productLiked)="likeProduct(product.id)"
        (productRemoved)="removeProduct(product.id)"
      ></app-product-item>
    </div>
  `,
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: ProductItem[] = [];
  @Output() productLiked = new EventEmitter<number>();
  @Output() productRemoved = new EventEmitter<number>();

  likeProduct(productId: number): void {
    this.productLiked.emit(productId);
  }

  removeProduct(productId: number): void {
    this.productRemoved.emit(productId);
  }
}