import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-pokemon',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule, HttpClientModule], // Importa los módulos necesarios
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100'; // Limitamos a 10 Pokémon
    this.http.get(apiUrl).subscribe((data: any) => {
      this.pokemonList = [];
      data.results.forEach((pokemon: any) => {
        this.http.get(pokemon.url).subscribe((pokemonData: any) => {
          this.pokemonList.push({
            name: this.capitalizeFirstLetter(pokemonData.name), // Formatea el nombre
            image: pokemonData.sprites.front_default,
            types: pokemonData.types.map((type: any) => this.capitalizeFirstLetter(type.type.name)).join(', '),
            id: pokemonData.id
          });
        });
      });
    });
  }

  refreshPokemon() {
    this.getPokemon();
  }

  // Método para capitalizar la primera letra
  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}