import { Injectable} from '@nestjs/common';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {
    private readonly authors:Author[]=[
       {id:1,name:'XXX',posts:[{id:11,title:'post1',body:'post1',authorId:1}]},
       {id:2,name:'YYY',posts:[{id:22,title:'post2',body:'post2',authorId:2},{id:33,title:'post3',body:'post3',authorId:2}]},
       {id:3,name:'ZZZ',posts:[]}
    ]

    allAuthors(){
        return this.authors;
    }

    getAuthorById(authorId){
        return this.authors.find(author => author.id === authorId);
    }
}
