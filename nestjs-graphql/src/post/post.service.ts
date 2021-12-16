import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostService {
    private posts:Post[] = [
        {id:11,title:'post1',body:'post1',authorId:1},
        {id:22,title:'post2',body:'post2',authorId:2},
        {id:33,title:'post3',body:'post3',authorId:2}
    ]

    async getPosts(){
        return this.posts
    }
}
