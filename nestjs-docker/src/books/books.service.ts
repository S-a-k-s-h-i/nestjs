import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createBookDTO } from './dto/createBookDto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel:Model<BookDocument>){}

    async createBook(createBookDto:createBookDTO):Promise<Book>{
        return await new this.bookModel({...createBookDto,createdAt:new Date()}).save();
    }

    async findAllBooks(){
        return this.bookModel.find().exec();
    }
}
