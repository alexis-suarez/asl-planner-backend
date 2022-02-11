import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Serve Static
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// TypeOrmModule
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // rootPath: join(__dirname, '..', 'public'),
      rootPath: join(__dirname, 'public'),
      serveRoot: '',
      // renderPath: '',
      exclude: ['/api*'],
    }),
    TypeOrmModule.forRoot({
      name: 'main',
      type: 'sqlite',
      database: join(__dirname, 'database.db'),
      synchronize: true,
      logging: false,
      entities: [join(__dirname, '/entities/**/*.entity{.ts,.js}')],
      migrations: [join(__dirname, '/migrations/**/*.ts')],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
