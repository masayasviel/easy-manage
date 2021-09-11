import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MyTable } from 'src/entities/mytable.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([MyTable])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
