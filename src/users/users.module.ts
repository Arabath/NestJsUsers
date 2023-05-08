import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Profile } from './profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile])], //forFeature([User]) --> Que entidades necesito conectar
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
