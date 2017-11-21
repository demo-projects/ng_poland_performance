import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCode'
})
export class GetCodePipe implements PipeTransform {

  transform(value: any, gender, nat): any {
    console.log('pipe calculate code');
    if(gender === 'male' && nat === 'BR') {
      return 1
    }
    return 0
  }
}
