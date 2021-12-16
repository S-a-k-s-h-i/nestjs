import { CacheInterceptor, CacheKey, Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @UseInterceptors(CacheInterceptor)
  @Get('/auto-cache')
  @CacheKey('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
