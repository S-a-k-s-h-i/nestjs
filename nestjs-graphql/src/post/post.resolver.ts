import { Resolver,Query, ResolveField, Parent } from '@nestjs/graphql';
import { Author } from 'src/author/author.entity';
import { AuthorService } from 'src/author/author.service';
import { Post } from './post.entity';
import { PostService } from './post.service';

@Resolver(of => Post)
export class PostResolver {
    constructor(
        private readonly postService:PostService,
        private readonly authorService:AuthorService
        ){}
    
    @Query(returns => [Post])
    getPosts(){
        return this.postService.getPosts();
    }

    @ResolveField('authorId',() => Author)
    getAuthorId(@Parent() post:Post){
        const { authorId } = post;
        return this.authorService.getAuthorById(authorId);
    }
}
