import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomToUrl',
  standalone: true,
})
export class RandomToUrlPipe implements PipeTransform {
  transform(url: string): string {
    const random = Math.floor(Math.random() * 100000);

    return `${url}?r=${random}`;
  }
}
