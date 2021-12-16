import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Post } from "src/post/post.entity";

@ObjectType()
export class Author{
    @Field(() => Int)
    id:number;

    @Field()
    name:string;
    
    @Field(() => [Post])
    posts?:Post[];
}