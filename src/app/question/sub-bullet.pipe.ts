import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subBullet',
  standalone: true,
})
export class SubBulletPipe implements PipeTransform {
  /**
   * Takes in answer, and returns a list of its title and sub-bullets.
   * @param answer
   * @returns
   */
  transform(answer: string): { title: string; subBullets: string[] } {
    const splitAnswer = answer.split('*');
    if (splitAnswer.length < 2) {
      return { title: answer, subBullets: [] };
    }
    return {
      title: splitAnswer[0],
      subBullets: splitAnswer.slice(1).map((subBullet) => subBullet.trim()),
    };
  }
}
