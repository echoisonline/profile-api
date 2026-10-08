import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  getName(): string {
    return 'Nikita';
  }
}
