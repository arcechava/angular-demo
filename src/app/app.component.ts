import { Component } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido CHAVA - Angular 4!';

  public toggleTitle(){
  	console.log('Diste Click al botón');
  	$('.title').slideToggle();
  }
}
