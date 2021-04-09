import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html'
})
export class HeroesFilterComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string = '';
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) {
    console.log("constructor heroesFilter");
   }

  ngOnInit(): void {
    console.log("ngOnInit heroesFilter");
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      this.termino = params['termino'];
    })
}

    buscarHeroe( nombre:string) {
      console.log(nombre + " en buscar heroe")
    this.router.navigate(["/heroePorNombre", nombre]);
    }

}
