import { Query, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';

@Resolver()
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => String, { name: 'profileName' })
  profileName(): string {
    return this.profileService.getName();
  }
}
