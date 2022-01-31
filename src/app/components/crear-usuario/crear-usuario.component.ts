import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

	usuario: Usuario;
	errorMessage = '';
	constructor(private usuarioService:UsuarioService) { 
		this.usuario = new Usuario();
		this.usuario.nombre = "";
	}

	ngOnInit(): void {
	}
	
	onSubmit(): void {
		
			this.usuarioService.create(this.usuario).subscribe(
				data => {
					this.usuario = data;
					console.log(this.usuario);
				},
				err => {
					this.errorMessage = err.error.message;
					console.log(this.errorMessage)
				}
			);	
	}

}
