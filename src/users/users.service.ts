import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'Nelu' }, { id: 1, name: 'Marco' }, { id: 2, name: 'Gionni' }, { id: 3, name: 'Nelu' }];


  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter(user => user.name === name);
    }
    return this.users;
  }

  findById(uid: number): User {
    return this.users.find(user => user.id === uid);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
