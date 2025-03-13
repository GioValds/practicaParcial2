import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';
import { LibroComponent } from './pages/libro/libro.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ProductosComponent } from './pages/productos/productos.component'; // Nueva ruta
import { AppComponent } from './pages/parcial1/parcial1.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'libro', component: LibroComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'productos', component: ProductosComponent }, // Nueva ruta
  {path:'parcial1', component: AppComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/home' } // Ruta para manejar errores 404
];