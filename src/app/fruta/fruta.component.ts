import { Component } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent{

  	public ListadoFrutas = 'Manzanas, Naranjas, Plátanos, Mandarinas'

  	public name:string = 'Elvis Arce Chavarría'
  	public edad:number = 25
  	public mayorEdad:boolean = true
  	public works:Array<any> = ['Analista', 22, false ,'Programador', 'Vendedor']
  	public comodin:any = 'Cualquier caracter'

  	constructor(){
  		console.log(this.works);
  		/*this.holaMundo(this.name)*/
  	}

  	ngOnInit(){
  		 var uno = 8
  		 var dos = 15

  		 if(uno === 8){
  		 	console.log('Dnetro del IF '+ uno)
  		 }
  		 console.log('Fuera el IF '+ uno)
  	}

  	/*holaMundo(name){
  		alert('Alert ! Hola Mundo.' + name)	
	}*/
}