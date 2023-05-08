import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { CreateProfileDto } from './dto/profile-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  //Obten todos
  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
  //Obten uno
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }
  //Crea uno
  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.usersService.createUser(newUser);
  }
  //Elimina uno
  @Delete()
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
  //Actualizar uno
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, user);
  }

  @Post(':id/profile') 
  createProfile(
  @Param('id', ParseIntPipe) id:number,
  @Body() profile: CreateProfileDto
  ) {
    return this.usersService.createProfile(id, profile)
  }
}
