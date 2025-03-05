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
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h67/84553911664670.jpg?format=gallery-large',
      name: 'Серьги',
      description: 'Жемчужное сердце нержавеющая сталь, искусственный жемчуг',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/ser-gi-zhemchuzhnoe-serdtse-nerzhavejuschaja-stal-iskusstvennyi-zhemchug-114776487/?c=111010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h46/81270775021598.jpg?format=gallery-medium',
      name: 'Серьги',
      description: 'Лепестки бижутерный сплав, без вставок',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/ser-gi-lepestki-bizhuternyi-splav-bez-vstavok-110853997/?c=111010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h7d/86988395839518.jpg?format=gallery-medium',
      name: 'Кольцо',
      description: 'размер регулируемый титан, фианит',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/kol-tso-razmer-reguliruemyi-titan-fianit-123047585/?c=111010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hf1/86485007400990.jpg?format=gallery-medium',
      name: 'Браслет',
      description: 'длина 15 см нержавеющая сталь, титан, без вставок',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/5780753-dlina-15-sm-nerzhavejuschaja-stal-titan-bez-vstavok-121187037/?c=111010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/hf5/68745355755550.jpg?format=gallery-medium',
      name: 'Комплект Premium jewellery',
      description: 'медицинская сталь, кристаллы Swarovski',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/premium-jewellery-meditsinskaja-stal-kristally-swarovski-108794639/?c=111010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h62/h8f/85052431958046.jpg?format=gallery-medium',
      name: 'Серьги',
      description: ' титан, медицинская сталь, без вставок',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/ser-gi-titan-meditsinskaja-stal-bez-vstavok-116320801/?c=111010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h3a/68275195707422.jpg?format=gallery-medium',
      name: 'Чокер Fashion Jewelry ',
      description: 'длина 36 см бижутерный сплав бисер, пластик',
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/choker-fashion-jewelry-dlina-36-sm-bizhuternyi-splav-biser-plastik-108602750/?c=111010000'
    }


  ];
  
}
