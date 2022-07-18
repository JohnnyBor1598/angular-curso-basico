import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


export class ListadoComponent {

  heroes: string [] = ['spiderman', 'hulk', 'goku'];
  heroeBorrado:string = '';


 borrar():void{
  console.log('borrando');

const borrado = this.heroes.shift() || '';

this.heroeBorrado = borrado;

 } 
}
