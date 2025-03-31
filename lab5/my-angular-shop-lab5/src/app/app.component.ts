import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

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

interface Category {
  name: string;
  products: ProductItem[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <h1>Категории Украшений</h1>
    <ul>
      <li *ngFor="let category of categories" (click)="selectCategory(category)">
        {{ category.name }}
      </li>
    </ul>

    <app-product-list
      *ngIf="selectedCategory"
      [products]="selectedCategory.products"
      (productLiked)="likeProduct($event)"
      (productRemoved)="removeProduct($event)"
    ></app-product-list>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  categories: Category[] = [
    {
      name: 'Ожерелья',
      products: [
        { id: 1, name: 'Золотое Ожерелье', price: 500000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/pa9/p48/5335738.jpeg?format=gallery-medium', description: 'Изысканное золотое ожерелье с подвеской.', rating: 4.5, link: 'https://kaspi.kz/shop/p/kol-e-estella-ozherel-e-zoloto-italy-14k-dlina-100-sm-ves-12-39-g-zoloto-bez-vstavok-129115378/?c=750000000' },
        { id: 2, name: 'Серебряное Ожерелье', price: 62900, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h75/85404366438430.jpg?format=gallery-medium', description: 'Стильное серебряное ожерелье с подвеской в форме сердца.', rating: 4.2, link: 'https://kaspi.kz/shop/p/kol-e-pandora-ozherel-e-s-zhemchuzhinoi-i-pave-393165c01-45-dlina-45-sm-ves-3-7-g-serebro-tsirkonii-117334404/?c=750000000' },
        { id: 3, name: 'Жемчужное Ожерелье', price: 2450, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h56/86619284242462.jpg?format=gallery-medium', description: 'Классическое жемчужное ожерелье для особых случаев.', rating: 4.8, link: 'https://kaspi.kz/shop/p/dlina-45-sm-bizhuternyi-splav-zhemchug-121793972/?c=750000000' },
        { id: 4, name: 'Бриллиантовое Ожерелье', price: 1000000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h98/85101911998494.jpg?format=gallery-medium', description: 'Роскошное бриллиантовое ожерелье с уникальным дизайном.', rating: 4.9, link: 'https://kaspi.kz/shop/p/kol-e-pervaja-brilliantovaja-8-493-20-dlina-40-sm-ves-2-83-g-zoloto-brilliant-116455608/?c=750000000' },
        { id: 5, name: 'Ожерелье из Бисера', price: 1500, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h3e/84825669500958.jpg?format=gallery-medium', description: 'Яркое ожерелье из бисера для повседневного образа.', rating: 4.0, link: 'https://kaspi.kz/shop/p/dlina-85-sm-bizhuternyi-splav-biser-115770586/?c=750000000' }
      ]
    },
    {
      name: 'Серьги',
      products: [
        { id: 6, name: 'Золотые Серьги', price: 30000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/paf/17251357.jpg?format=gallery-medium', description: 'Изысканные золотые серьги с бриллиантами.', rating: 4.6, link: 'https://kaspi.kz/shop/p/ser-gi-zg-brand-954102617-ves-3-76-g-serebro-zoloto-bez-vstavok-132586221/?c=750000000' },
        { id: 7, name: 'Серебряные Серьги', price: 2900, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/he7/86919895744542.jpg?format=gallery-medium', description: 'Стильные серебряные серьги с жемчугом.', rating: 4.3, link: 'https://kaspi.kz/shop/p/pusety-al-kor-02-4458-00kts-00-ves-1-8-g-serebro-fianit-122801268/?c=750000000' },
        { id: 8, name: 'Серьги-Кольца', price: 129000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hed/64565846114334.jpg?format=gallery-medium', description: 'Классические серьги-кольца для повседневной носки.', rating: 4.1, link: 'https://kaspi.kz/shop/p/kongo-italy-gold-r765567-ves-3-32-g-zoloto-bez-vstavok-106676859/?c=750000000' },
        { id: 9, name: 'Серьги-Гвоздики', price: 3600, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/heb/84415708692510.jpg?format=gallery-medium', description: 'Простые серьги-гвоздики с драгоценным камнем.', rating: 4.4, link: 'https://kaspi.kz/shop/p/pusety-ipekyolu-jewellery-0-5-karat-2502-04-271023ay-ves-2-g-serebro-muassanit-114221734/?c=750000000' },
        { id: 10, name: 'Серьги-Подвески', price: 4000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h24/83568813506590.jpg?format=gallery-medium', description: 'Элегантные серьги-подвески для особых случаев.', rating: 4.7, link: 'https://kaspi.kz/shop/p/ser-gi-aquamarine-45049a-ves-1-16-g-serebro-fianit-113151050/?c=750000000' }
      ]
    },
     {
      name: 'Кольца',
      products: [
        { id: 11, name: 'Золотое Кольцо', price: 43000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h31/80363689181214.jpg?format=gallery-medium', description: 'Изысканное золотое кольцо с бриллиантом.', rating: 4.7, link: 'https://kaspi.kz/shop/p/aizhan-gold-aizh1251-razmer-17-5-18-5-ves-1-07-g-zoloto-fianit-110014402/?c=750000000' },
        { id: 12, name: 'Серебряное Кольцо', price: 22000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p6e/p99/27035441.jpeg?format=gallery-medium', description: 'Стильное серебряное кольцо с жемчугом.', rating: 4.4, link: 'https://kaspi.kz/shop/p/dana-silver-serebrjanyi-kol-tso-k-m-s-razmer-19-5-ves-8-9-g-serebro-tsirkonii-135354764/?c=750000000' },
        { id: 13, name: 'Обручальное Кольцо', price:  47000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hd0/64727072768030.jpg?format=gallery-medium', description: 'Красивое обручальное кольцо с бриллиантом.', rating: 4.9, link: 'https://kaspi.kz/shop/p/diamond-175122-razmer-17-5-ves-1-22-g-zoloto-fianit-105876787/?c=750000000' },
        { id: 14, name: 'Свадебное Кольцо', price: 14700, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h43/86957025951774.jpg?format=gallery-medium', description: 'Классическое свадебное кольцо для пар.', rating: 4.8, link: 'https://kaspi.kz/shop/p/diamond-94110017-razmer-22-ves-2-94-g-serebro-bez-vstavok-122927552/?c=750000000' },
        { id: 15, name: 'Коктейльное Кольцо', price: 1000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h0f/84939931189278.jpg?format=gallery-medium', description: 'Уникальное коктейльное кольцо для особых мероприятий.', rating: 4.6, link: 'https://kaspi.kz/shop/p/kol-tso-razmer-reguliruemyi-bizhuternyi-splav-perlamutr-115959663/?c=750000000' }
      ]
    },
    {
      name: 'Браслеты',
      products: [
        { id: 16, name: 'Золотой Браслет', price: 35000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h60/85092891131934.jpg?format=gallery-medium', description: 'Изысканный золотой браслет с подвесками.', rating: 4.5, link: 'https://kaspi.kz/shop/p/ai-kerbez-blezik-anama-zoloto-braslet-serebro-dlina-20-sm-ves-32-g-zoloto-serebro-pletenie-otsutstvuet-116428400/?c=750000000' },
        { id: 17, name: 'Серебряный Браслет', price: 2150, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h29/h8e/85056275251230.jpg?format=gallery-medium', description: 'Стильный серебряный браслет с подвеской в форме сердца.', rating: 4.3, link: 'https://kaspi.kz/shop/p/16332026-368496-dlina-20-sm-ves-2-06-g-serebro-pletenie-jakornoe-116333563/?c=750000000' },
        { id: 18, name: 'Браслет с Подвесками', price: 3150, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h1d/84905606283294.jpg?format=gallery-medium', description: 'Персонализированный браслет с уникальными подвесками.', rating: 4.7, link: 'https://kaspi.kz/shop/p/30118204-711458-dlina-19-sm-nerzhavejuschaja-stal-zhemchug-115901554/?c=750000000' },
        { id: 19, name: 'Браслет-Бэнгл', price: 33000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/h90/63912376533022.jpg?format=gallery-medium', description: 'Набор браслетов-бэнгл для модного образа.', rating: 4.2, link: 'https://kaspi.kz/shop/p/trollbeads-tcuba-00002-bengl-xs-dlina-16-sm-med-bez-vstavok-100507531/?c=750000000' },
        { id: 20, name: 'Теннисный Браслет', price: 10000, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/hb0/84703752781854.jpg?format=gallery-medium', description: 'Классический теннисный браслет с бриллиантами.', rating: 4.8, link: 'https://kaspi.kz/shop/p/felice-br-00167-dlina-17-sm-ves-3-g-serebro-pletenie-tennis-108253623/?c=750000000' }
      ]
    }
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  likeProduct(productId: number): void {
    if (this.selectedCategory) {
      const product = this.selectedCategory.products.find((p) => p.id === productId);
      if (product) {
        product.likes++;
      }
    }
  }

  removeProduct(productId: number): void {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter((p) => p.id !== productId);
    }
  }
}