import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
	usuario: Usuario;
	usuarios: Array<Usuario>;
	errorMessage = '';

	constructor(private usuarioService:UsuarioService) {
		this.usuario = new Usuario();
		this.usuarios = new Array<Usuario>();
		this.usuario.nombre = "";
	 }

	ngOnInit(): void {
	}

	onSubmit(): void {
		if(this.usuario.nombre?.length == 0 || this.usuario.nombre == undefined){
			this.usuarioService.getAll().subscribe(
				data => {
					this.usuarios = data;
					this.usuarios.forEach(element => console.log(element));
				},
				err => {
					this.errorMessage = err.error.message;
					console.log(this.errorMessage)
				}
			);
		}else{
			this.usuarioService.findByNombre(this.usuario.nombre).subscribe(
				data => {
					this.usuario = data;
					this.usuarios.push(this.usuario);
					console.log(this.usuario);
				},
				err => {
					this.errorMessage = err.error.message;
					console.log(this.errorMessage)
				}
			);
		}

	}

	limpiar(): void{
		this.usuario = new Usuario();
		this.usuarios = new Array<Usuario>();
		this.usuario.nombre = "";
	}

}
