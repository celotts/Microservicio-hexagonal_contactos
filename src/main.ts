import { NestFactory } from '@nestjs/core';
import { ContactoModule } from './contacto.module';

async function bootstrap() {
  const app = await NestFactory.create(ContactoModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(3001);
}
bootstrap();
