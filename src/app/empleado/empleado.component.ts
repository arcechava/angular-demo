import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

	public titulo = 'Título del Componente Empleado'

  constructor() { }

  ngOnInit() {
  }

}
