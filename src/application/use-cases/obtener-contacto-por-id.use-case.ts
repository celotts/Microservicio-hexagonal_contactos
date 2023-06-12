import { Injectable } from '@nestjs/common';
import { Contacto } from '../../domain/models/contacto.model';
import { ContactosRepository } from '../../domain/repositories/contactos.repository';
import { ObtenerContactoDto } from '../dtos/obtener-contacto.dto';

@Injectable()
export class ObtenerContactoPorIdUseCase {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async execute(obtenerContactoDto: ObtenerContactoDto): Promise<Contacto> {
    return this.contactosRepository.findById(obtenerContactoDto.idContacto);
  }
}
