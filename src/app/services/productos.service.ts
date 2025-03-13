import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private firestore: Firestore) {}

  // Agregar un producto
  agregarProducto(producto: any) {
    const productosRef = collection(this.firestore, 'productos');
    return addDoc(productosRef, producto);
  }

  // Obtener todos los productos
  obtenerProductos(): Observable<any[]> {
    const productosRef = collection(this.firestore, 'productos');
    return collectionData(productosRef, { idField: 'id' }) as Observable<any[]>;
  }

  // Eliminar un producto
  eliminarProducto(id: string) {
    const productoDocRef = doc(this.firestore, `productos/${id}`);
    return deleteDoc(productoDocRef);
  }

  // Modificar un producto
  modificarProducto(id: string, producto: any) {
    const productoDocRef = doc(this.firestore, `productos/${id}`);
    return updateDoc(productoDocRef, producto);
  }
}