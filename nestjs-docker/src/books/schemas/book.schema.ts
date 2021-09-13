import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop()
    name: string;

    @Prop()
    author: number;

    @Prop()
    price: number;

    @Prop()
    createdAt?:Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);