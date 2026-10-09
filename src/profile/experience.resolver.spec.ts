import { describe, expect, it } from 'vitest';
import { ExperienceResolver } from './experience.resolver.js';

describe('ExperienceResolver.period', () => {
  const resolver = new ExperienceResolver();

  it('форматирует период с датой окончания', () => {
    const result = resolver.period({
      startedAt: new Date('2024-05-01T00:00:00.000Z'),
      endedAt: new Date('2026-09-01T00:00:00.000Z'),
    });

    expect(result).toBe('май 2024 г. - сентябрь 2026 г.');
  });

  it('форматирует период без даты окнчания', () => {
    const result = resolver.period({
      startedAt: new Date('2024-05-01T00:00:00.000Z'),
      endedAt: null,
    });

    expect(result).toBe('май 2024 г. - настоящее время');
  });
});
