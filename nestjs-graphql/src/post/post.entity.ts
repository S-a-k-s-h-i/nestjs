import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Author } from "src/author/author.entity";

@ObjectType()
export class Post{
    @Field(type => Int)
    id:number;

    @Field()
    title:string;
    
    @Field()
    body:string;
    
    @Field(() => Author)
    authorId:number;

}