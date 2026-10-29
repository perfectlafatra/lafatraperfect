import { describe, expect, it } from 'vitest';
import { projects } from '../content/projectIndex';

describe('public project catalogue', () => {
  it('contains only the four documented Java and Full-Stack case studies', () => {
    expect(projects.map((project) => project.slug)).toEqual([
      'mada-bmp',
      'lalana',
      'volatech',
      'zina-tsara-volo',
    ]);
    expect(projects.some((project) => /natur|certification/i.test(project.title.fr))).toBe(false);
  });

  it('does not expose a demo link unless it has been verified', () => {
    expect(projects.filter((project) => !project.demoVerified).every((project) => project.demoUrl === null)).toBe(true);
  });
});

