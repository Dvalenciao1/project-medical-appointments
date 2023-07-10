import { Module } from '@nestjs/common';
// *file env
import { ConfigModule } from '@nestjs/config';
//* typeorm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// *Modules
import { MedicalInvoiceModule } from './module/medical-invoice/medical-invoice.module';
import { ClientModule } from './module/client/client.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASS,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MedicalInvoiceModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
