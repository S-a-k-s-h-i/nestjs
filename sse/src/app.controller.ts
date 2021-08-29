import { Controller, Get, Res, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

interface MessageEvent {
  data: string | object;
  id?: string;
  type?: string;
  retry?: number;
}

@Controller()
export class AppController {

  @Get('/about')
  about(){
    console.log('sse')
  }
  @Sse('sse')
  sse(): Observable<MessageEvent> {
  return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
}
}
