import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CrearContactoDto } from '../dtos/crear-contacto.dto';
import { ActualizarContactoDto } from '../dtos/actualizar-contacto.dto';
import { ObtenerContactoDto } from '../dtos/obtener-contacto.dto';
import { CrearContactoUseCase } from '../use-cases/crear-contacto.use-case';
import { ObtenerContactoPorIdUseCase } from '../use-cases/obtener-contacto-por-id.use-case';
import { ObtenerContactoAllUseCase } from '../use-cases/obtener-contacto-all.use-case';
import { ActualizarContactoUseCase } from '../use-cases/actualizar-contacto.use-case';
import { EliminarContactoUseCase } from '../use-cases/eliminar-contacto.use-case';

@Controller('contactos')
export class ContactosController {
  constructor(
    private readonly crearContactoUseCase: CrearContactoUseCase,
    private readonly obtenerContactoPorIdUseCase: ObtenerContactoPorIdUseCase,
    private readonly obtenerContactoAllUseCase: ObtenerContactoAllUseCase,
    private readonly actualizarContactoUseCase: ActualizarContactoUseCase,
    private readonly eliminarContactoUseCase: EliminarContactoUseCase,
  ) {}

  @Post()
  async crearContacto(
    @Body() crearContactoDto: CrearContactoDto,
  ): Promise<number> {
    return this.crearContactoUseCase.execute(crearContactoDto);
  }

  @Get(':idContacto')
  async obtenerContactoPorId(
    @Param() obtenerContactoDto: ObtenerContactoDto,
  ): Promise<any> {
    return this.obtenerContactoPorIdUseCase.execute(obtenerContactoDto);
  }

  @Get()
  async obtenerTodosLosContactos(): Promise<any[]> {
    return this.obtenerContactoAllUseCase.execute();
  }

  @Patch(':idContacto')
  async actualizarContacto(
    @Param('idContacto') idContacto: number,
    @Body() actualizarContactoDto: ActualizarContactoDto,
  ): Promise<void> {
    return this.actualizarContactoUseCase.execute(
      idContacto,
      actualizarContactoDto,
    );
  }

  @Delete(':idContacto')
  async eliminarContacto(
    @Param('idContacto') idContacto: number,
  ): Promise<void> {
    return this.eliminarContactoUseCase.execute(idContacto);
  }
}
