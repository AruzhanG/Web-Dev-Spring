import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-list',
  standalone: true, // Needed for `imports` to work in standalone components
  imports: [CommonModule], // Allows using directives like *ngFor
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] // Must be an array
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Серьги 2024 ', description: 'бижутерный сплав, без вставок', price: 1000, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h72/he6/81270749823006.jpg?format=gallery-medium', category: 'Украшения', likes: 0 },
    { id: 2, name: 'Кафф Fashion Jewelry N ', description: 'бижутерный сплав, бисер', price: 700, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4d/hce/64477705502750.jpg?format=gallery-medium', category: 'Украшения', likes: 0 },
    { id: 3, name: 'Серьги', description: 'бижутерный сплав, без вставок', price: 500, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h95/85470638145566.jpg?format=gallery-medium', category: 'Украшения', likes: 0 },
    { id: 4, name: 'Кольцо', description: ' размер регулируемый бижутерный сплав, жемчуг, стразыs', price: 200, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h80/ha1/79837022289950.jpg?format=gallery-medium', category: 'Украшения', likes: 0 },
    { id: 5, name: 'Браслет ', description: 'длина 16 см медицинская сталь, цирконий', price: 300, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h84/hf5/84640969162782.jpg?format=gallery-medium', category: 'Украшения', likes: 0 }
  ];
}
