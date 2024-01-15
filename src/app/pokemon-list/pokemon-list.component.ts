import { Component, NgModule, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrl: "./pokemon-list.component.css",
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  page = 1;
  totalPokemons: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getPokemons(12, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((result: any) => {
          this.dataService
            .getMoreData(result.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons
                .sort((a, b) => (b < a ? -1 : 1))
                .push(uniqueResponse);
              console.log(this.pokemons);
            });
        });
      });
  }
}
