import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('APIs Documentation')
    .setDescription('The To-do API description')
    .setVersion('1.0.1')
    .addTag('v-1.0.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };

  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('api/doc', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
