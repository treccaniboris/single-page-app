import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html'
})
export class HeroesFilterComponent implements OnInit {

  heroes:any[] = [];
  termino:string = '';
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) {
    console.log("constructor heroesFilter");
   }

  ngOnInit(): void {
    console.log("ngOnInit heroesFilter");
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log(this.heroes);
    })
}


// verHeroe( idx:number) {
//   this.router.navigate(["/heroe", idx]);
//   }

}
