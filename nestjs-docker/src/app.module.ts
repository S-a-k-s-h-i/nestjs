import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://admin:password@localhost:27017',
  { useNewUrlParser: true, useUnifiedTopology: true })
  , BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
