import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactosService } from './services/contactos.service';
import { ContactosController } from './controller/contactos.controller';
import { Contactos } from './entities/contact.entity';
import { ContactsRepository } from './repositories/contactos.repository';
import { ActualizarContactoUseCase } from './use-cases/actualizar-contacto.use-case';
import { CrearContactoUseCase } from './use-cases/crear-contacto.use-case';
import { EliminarContactoUseCase } from './use-cases/eliminar-contacto.use-case';
import { ObtenerContactoAllUseCase } from './use-cases/obtener-contacto-all.use-case';
import { ObtenerContactoPorIdUseCase } from './use-cases/obtener-contacto-por-id.use-case';

@Module({
  //imports: [TypeOrmModule.forFeature([ContactosRepository])],
  imports: [TypeOrmModule.forFeature([Contactos, ContactsRepository])],
  controllers: [ContactosController],
  providers: [
    ContactosService,
    ContactsRepository,
    /* ActualizarContactoUseCase,
    CrearContactoUseCase,
    EliminarContactoUseCase,
    ObtenerContactoAllUseCase,
    ObtenerContactoPorIdUseCase, */
  ],
  exports: [
    ContactosService,
    /* ActualizarContactoUseCase,
    CrearContactoUseCase,
    EliminarContactoUseCase,
    ObtenerContactoAllUseCase,
    ObtenerContactoPorIdUseCase, */
  ],
})
export class ContactsModule {}
