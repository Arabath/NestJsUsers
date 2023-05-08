import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from  '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Jazzband123',
        database: 'nestdb',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
    }), 
    UsersModule, PostsModule],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {} 
