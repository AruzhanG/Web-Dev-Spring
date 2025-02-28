import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h3a/80521159606302.jpg?format=gallery-medium',
      name: 'Серьги Бабочки медицинская сталь, эмаль',
      description: 'Цвет материала золотистый',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/ser-gi-babochki-meditsinskaja-stal-emal--110103164/?c=111010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hce/69489076142110.jpg?format=gallery-medium',
      name: 'Набор Fashion Jewelry бижутерный сплав, титан, стразы, искусственный жемчуг',
      description: 'Страна производитель Китай',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/nabor-fashion-jewelry-bizhuternyi-splav-titan-strazy-iskusstvennyi-zhemchug-109101372/?c=111010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h17/84946989482014.jpg?format=gallery-medium',
      name: 'Цепь',
      description: 'Цепь длина 35 см бижутерный сплав страз',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/tsep-dlina-35-sm-bizhuternyi-splav-straz-115980054/?c=111010000'
    }
  ];
}
