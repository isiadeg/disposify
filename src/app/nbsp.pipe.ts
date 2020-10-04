import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nbsp'
})
export class NbspPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let character = args[0];
    let hi;
    hi = value.replace(args, "&nbsp;");
    return hi;
  }

}
