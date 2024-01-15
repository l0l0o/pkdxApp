import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Get pokemons
  getPokemons(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1050`);
  }

  //Get more Pokemons Data
  getMoreData(name: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
