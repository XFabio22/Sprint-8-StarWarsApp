import { pilots } from './../../interfaces/starships.interfaces';
import { Pipe, PipeTransform } from "@angular/core";
import { Result } from "../../interfaces/starships.interfaces";


@Pipe({
    name: 'id'
})
export class IdPipe implements PipeTransform {
    transform( result: Result | pilots ): string  {
        return result.url.replace(/\D/g, '');
    }

}