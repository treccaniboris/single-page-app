import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent{

  heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
        this.heroe = this._heroesService.getHeroe( params['id']);
      }
      // } else if(params['nombre']){
      //   console.log( params['nombre'] + " heroe.component Entro en else");
      //   this.heroe = this._heroesService.getHeroeByName(params['nombre']);
      // }

      console.log(this.heroe);
    })
   }

}
