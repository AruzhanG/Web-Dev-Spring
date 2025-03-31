import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-item">
      <img [src]="product.image" alt="{{ product.name }}" class="product-image">
      <h3>{{ product.name }}</h3>
      <p>Цена: {{ product.price }}</p>
      <p>Лайки: {{ product.likes }}</p>
      <button (click)="like()">Лайк</button>
      <button (click)="remove()">Удалить</button>
    </div>
  `,
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: ProductItem = {
    id: 0,
    name: '',
    price: 0,
    likes: 0,
    image: '',
    description: '',
    rating: 0,
    link: '',
  };
  @Output() productLiked = new EventEmitter<number>();
  @Output() productRemoved = new EventEmitter<number>();

  like(): void {
    this.productLiked.emit(this.product.id);
  }

  remove(): void {
    this.productRemoved.emit(this.product.id);
  }
}