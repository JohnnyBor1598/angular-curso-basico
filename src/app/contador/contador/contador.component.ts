import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
<h1>{{title}}</h1>
<h3>la base es:<strong>{{base}}</strong></h3>


<button (click) = "acumular(base)">sumar + {{base}}</button>
<button (click) = "acumular(-base)">restar - {{base}}</button>
<br><br>
<span>{{numero}}</span>

    `
})


export class ContadorComponent{
    title: string = 'bases';
    numero: number = 10;


    base: number = 5;

    acumular(valor: number) {

        this.numero = this.numero + valor;
    }
}
