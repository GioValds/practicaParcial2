import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  title = 'TechStore';

  // Propiedad para nuevo producto
  producto = { id: 0, nombre: '', precio: 0, categoria: '', stock: 0 };

  // Lista de productos tecnológicos
  productos = [
    { id: 1, nombre: 'Laptop ASUS', precio: 15000, categoria: 'Computadoras', stock: 10 },
    { id: 2, nombre: 'Smartphone Samsung', precio: 12000, categoria: 'Celulares', stock: 15 },
    { id: 3, nombre: 'Tablet iPad', precio: 10500, categoria: 'Tablets', stock: 8 },
    { id: 4, nombre: 'Monitor LG 27"', precio: 8500, categoria: 'Monitores', stock: 12 },
    { id: 5, nombre: 'Teclado Mecánico RGB', precio: 2500, categoria: 'Accesorios', stock: 20 },
  ];

  // Verifica si hay productos disponibles
  hayProductos(): boolean {
    return this.productos.length > 0;
  }

  // Agregar un nuevo producto a la lista
  agregarProducto(): void {
    if (this.producto.id <= 0) {
      alert('El ID debe ser mayor a 0.');
      return;
    }
    if (this.productos.some(p => p.id === this.producto.id)) {
      alert('Ya existe un producto con este ID.');
      return;
    }
    if (!this.producto.nombre.trim() || this.producto.precio <= 0 || !this.producto.categoria.trim() || this.producto.stock < 0) {
      alert('Nombre, precio, categoría y stock deben ser válidos.');
      return;
    }

    this.productos.push({ ...this.producto });
    this.resetProducto();
  }

  // Seleccionar producto para edición
  seleccionarProducto(productoSeleccionado: { id: number; nombre: string; precio: number; categoria: string; stock: number }): void {
    this.producto = { ...productoSeleccionado };
  }

  // Modificar un producto existente
  modificarProducto(): void {
    const index = this.productos.findIndex(p => p.id === this.producto.id);
    if (index !== -1) {
      this.productos[index] = { ...this.producto };
      this.resetProducto();
    } else {
      alert('Producto no encontrado.');
    }
  }

  // Eliminar un producto por ID
  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }

  // Resetear el formulario del producto
  private resetProducto(): void {
    this.producto = { id: 0, nombre: '', precio: 0, categoria: '', stock: 0 };
  }
}
