import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Contactos } from '../entities/contactos.entity';
import { ContactosService } from '../services/contactos.service';

@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Get()
  async getAllContactos(): Promise<Contactos[]> {
    return await this.contactosService.obtenerContactos();
  }

  @Get(':id')
  async obtenerContactoPorId(@Param('id') id: number): Promise<Contactos> {
    return await this.contactosService.obtenerContactoPorId(id);
  }

  @Post()
  async crearContacto(@Body() contacto: Contactos): Promise<Contactos> {
    return await this.contactosService.crearContacto(contacto);
  }

  @Put(':id')
  async actualizarContacto(
    @Param('id') id: number,
    @Body() contacto: Contactos,
  ): Promise<Contactos> {
    contacto.idContacto = id;
    return await this.contactosService.actualizarContacto(id, contacto);
  }

  @Delete(':id')
  async eliminarContacto(@Param('id') id: number): Promise<void> {
    return await this.contactosService.eliminarContacto(id);
  }
}
