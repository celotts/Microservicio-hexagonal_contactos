import { Injectable } from '@nestjs/common';
import { ObtenerContactoDto } from '../dtos/obtener-contacto.dto';
import { ContactosService } from '../services/contactos.service';

@Injectable()
export class ObtenerContactoAllUseCase {
  constructor(private readonly contactosService: ContactosService) {}

  async execute(): Promise<ObtenerContactoDto[]> {
    return await this.contactosService.obtenerContactos();
  }
}
