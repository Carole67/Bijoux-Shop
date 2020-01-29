import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

    transform(value: any, ...args: any): any {
        return "(+33)" + value.substr(1);
    }

}
