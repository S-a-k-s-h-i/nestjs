import { Query, Resolver } from '@nestjs/graphql';
import { Author } from './author.entity';
import { AuthorService } from './author.service';

@Resolver(of => Author)
export class AuthorResolver {
    constructor(private authorService:AuthorService){}
    
    @Query(returns => [Author])
    getAuthors(){
        return this.authorService.allAuthors();
    }
}
