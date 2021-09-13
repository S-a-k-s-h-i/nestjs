import { Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { createBookDTO } from './dto/createBookDto';

@Controller('books')
export class BooksController {
    constructor(private bookService:BooksService){}
    
    @Post('create')
    async createBook(createBookDto:createBookDTO){
        return await this.bookService.createBook(createBookDto);
    }
    
    @Get('findAll')
    async findAllBooks(){
        return await this.bookService.findAllBooks();
    }
}
