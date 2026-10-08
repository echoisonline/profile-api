import { Injectable } from '@nestjs/common';
import { Profile } from './profile.model.js';

@Injectable()
export class ProfileService {
  getProfile(): Profile {
    return {
      name: 'Никита Нестеренко',
      description: 'Fullstack-разработчик',
      githubUrl: 'https://github.com/echoisonline',
    };
  }
}
