import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterApprovedListByName'
})
export class FilterApprovedListByNamePipe implements PipeTransform {

  transform(list: string[], nome: string): string[] {
    return list.filter(e => e.includes(nome));
  }

}
