import { Module,CacheModule, CacheInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as redisStore from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CacheModule.register({
      store:redisStore,
      host:'localhost',
      port:6379,
      ttl:300
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { 
      provide:APP_INTERCEPTOR,
      useClass:CacheInterceptor
    }
  ],
})
export class AppModule {}
