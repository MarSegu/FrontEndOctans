import { Rol } from './rol.model';

export class Usuario {
	idUsuario?: number;
	nombre?: string;
	activo?: boolean;
	rol?: Rol;
}