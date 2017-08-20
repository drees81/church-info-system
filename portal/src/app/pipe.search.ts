import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(pipeData, pipeModifier, showActiveOnly) {
    return  pipeData.filter((eachItem) => {
      return  (eachItem['available'] === true || showActiveOnly === false)
              && (pipeModifier === undefined ||
                eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                eachItem['number'].toLowerCase().includes(pipeModifier.toLowerCase()));
    });
  }
}
