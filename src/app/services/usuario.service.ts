import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario.model";

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	
	constructor(private http: HttpClient) { }

	getAll(): Observable<Usuario[]> {
		return this.http.get<Usuario[]>(baseUrl);
	}

	get(id: any): Observable<Usuario> {
		return this.http.get(`${baseUrl}/${id}`);
	}

	create(data: any): Observable<any> {
		console.log(data);
		return this.http.post(baseUrl, data);
	}

	update(id: any, data: any): Observable<any> {
		return this.http.put(`${baseUrl}/${id}`, data);
	}

	delete(id: any): Observable<any> {
		return this.http.delete(`${baseUrl}/${id}`);
	}

	findByNombre(nombre: any): Observable<Usuario> {
		return this.http.get<Usuario>(`${baseUrl}/${nombre}`);
	}
}
