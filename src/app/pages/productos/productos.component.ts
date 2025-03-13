import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  title = 'TechStore';

  // Propiedad para nuevo producto
  producto = { id: '', nombre: '', precio: 0, categoria: '', stock: 0 };

  // Lista de productos
  productos: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  // Obtener productos desde Firestore
  obtenerProductos(): void {
    this.productosService.obtenerProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  // Agregar un nuevo producto a Firestore
  agregarProducto(): void {
    if (!this.producto.nombre.trim() || this.producto.precio <= 0 || !this.producto.categoria.trim() || this.producto.stock < 0) {
      alert('Nombre, precio, categoría y stock deben ser válidos.');
      return;
    }

    this.productosService.agregarProducto(this.producto).then(() => {
      alert('Producto agregado correctamente.');
      this.resetProducto();
    }).catch((error) => {
      alert('Error al agregar el producto: ' + error.message);
    });
  }

  // Seleccionar producto para edición
  seleccionarProducto(productoSeleccionado: any): void {
    this.producto = { ...productoSeleccionado };
  }

  // Modificar un producto existente en Firestore
  modificarProducto(): void {
    if (!this.producto.id) {
      alert('Selecciona un producto para modificar.');
      return;
    }

    this.productosService.modificarProducto(this.producto.id, this.producto).then(() => {
      alert('Producto modificado correctamente.');
      this.resetProducto();
    }).catch((error) => {
      alert('Error al modificar el producto: ' + error.message);
    });
  }

  // Eliminar un producto de Firestore
  eliminarProducto(id: string): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productosService.eliminarProducto(id).then(() => {
        alert('Producto eliminado correctamente.');
      }).catch((error) => {
        alert('Error al eliminar el producto: ' + error.message);
      });
    }
  }

  // Resetear el formulario del producto
  resetProducto(): void {
    this.producto = { id: '', nombre: '', precio: 0, categoria: '', stock: 0 };
  }
}