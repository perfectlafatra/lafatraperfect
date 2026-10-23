import { describe, expect, it } from 'vitest';
import { projects } from '../content/projectIndex';

describe('public project catalogue', () => {
  it('contains only the three documented historical cases and Mada-BMP', () => {
    expect(projects.map((project) => project.slug)).toEqual([
      'react-localstorage',
      'lalana',
      'zina-tsara-volo',
      'mada-bmp'
    ]);
    expect(projects.some((project) => /natur|certification/i.test(project.title.fr))).toBe(false);
  });

  it('does not expose a demo link unless it has been verified', () => {
    expect(projects.filter((project) => !project.demoVerified).every((project) => project.demoUrl === null)).toBe(true);
  });
});

