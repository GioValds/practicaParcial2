import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosComponent } from './productos.component';

describe('ProductosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductosComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ejemplo3' title`, () => {
    const fixture = TestBed.createComponent(ProductosComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ejemplo3');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ProductosComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ejemplo3');
  });
});
