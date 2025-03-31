import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = {
      id: 1,
      name: 'Test Product',
      price: 100,
      likes: 0,
      image: 'test.jpg',
      description: 'Test description',
      rating: 4,
      link: 'test.com',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit productLiked event when like() is called', () => {
    spyOn(component.productLiked, 'emit');
    component.like();
    expect(component.productLiked.emit).toHaveBeenCalledWith(1);
  });

  it('should emit productRemoved event when remove() is called', () => {
    spyOn(component.productRemoved, 'emit');
    component.remove();
    expect(component.productRemoved.emit).toHaveBeenCalledWith(1);
  });

  it('should display product details correctly', () => {
    const productElement: HTMLElement = fixture.nativeElement;
    const nameElement = productElement.querySelector('h3');
    const priceElement = productElement.querySelector('p:nth-child(2)');
    const likesElement = productElement.querySelector('p:nth-child(3)');

    expect(nameElement?.textContent).toContain('Test Product');
    expect(priceElement?.textContent).toContain('Цена: 100');
    expect(likesElement?.textContent).toContain('Лайки: 0');
  });
});