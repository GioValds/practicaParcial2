import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './parcial1.component.html',
  styleUrl: './parcial1.component.css'
})
export class AppComponent {
  title = 'ejemplo3';

  //Propiedades
  producto = {
    id: 0,
    descripcion: '',
    precio: 0
  }

  //Arreglo de productos
  productos = [
    {id: 1, descripcion: 'Compu', precio: 15.50},
    {id: 2, descripcion: 'Teclado', precio: 39},
    {id: 3, descripcion: 'Raton', precio: 40},
    {id: 4, descripcion: 'Monitor', precio: 20},
    {id: 5, descripcion: 'Tele', precio: 19},
  ];

  //funcion que determina si hay productos en el arreglo
  hayProductos(){
    return this.productos.length > 0;
  }

  //funcion que agrega productos al arreglo
  agregarProducto(){
    if(this.producto.id == 0){
      alert('El ID del producto debe ser diferente de CERO');
      return;
    }
    for(let i=0; i < this.productos.length; i++){
      if(this.producto.id == this.productos[i].id) {
        alert('Ya existe un producto con ese ID');
        return;
      }
    }

    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }

  //método para seleccionar un producto existente
  seleccionarProducto(productoSeleccionado: {id:number; descripcion: string; precio: number;}){
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;
  }

  //funcion para modificar un producto (el producto seleccionado)
  modificarProducto(){
    for(let i=0; i < this.productos.length; i++){
      if(this.producto.id == this.productos[i].id){
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;

        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        return;
      }
    }

    alert('No existe ID');
  }

  //Funcion para eliminar un producto
  eliminarProducto(id: number) {
    for(let i=0; i<this.productos.length;i++) {
      if(id == this.productos[i].id) {
        this.productos.splice(i,1);
        return;
      }
    }
  }
}

