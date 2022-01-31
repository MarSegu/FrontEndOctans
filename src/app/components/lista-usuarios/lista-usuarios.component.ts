import { Component, Input, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol.model';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

	@Input() usuarios: Array<Usuario>;
		
	constructor() { 
		this.usuarios = new Array<Usuario>();
	}

	ngOnInit(): void {
	}

	

}
