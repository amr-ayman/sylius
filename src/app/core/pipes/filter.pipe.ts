import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterProducts',
    pure: false
})
export class FilterProducts implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!filter) {
            return items;
        }
        return items.filter(item => item.category.indexOf(filter) > -1);
    }
}
