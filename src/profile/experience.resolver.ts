import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Experience } from './experience.model.js';

const monthYear = new Intl.DateTimeFormat('ru-RU', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

@Resolver(() => Experience)
export class ExperienceResolver {
  @ResolveField(() => String)
  period(@Parent() job: { startedAt: Date; endedAt: Date | null }): string {
    const end = job.endedAt ? monthYear.format(job.endedAt) : 'настоящее время';

    return `${monthYear.format(job.startedAt)} - ${end}`;
  }
}
