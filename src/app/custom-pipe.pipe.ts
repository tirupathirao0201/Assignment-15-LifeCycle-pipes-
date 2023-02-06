import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
  value : string='';
  transform(value: string, ...args: unknown[]): unknown {
    this.value= value.split("").reverse().join("");
    return this.value;
  }

}
