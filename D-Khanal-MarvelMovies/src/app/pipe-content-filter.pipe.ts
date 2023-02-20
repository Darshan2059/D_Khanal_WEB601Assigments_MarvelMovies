import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
@Pipe({
  name: 'pipeContentFilter'
})
export class PipeContentFilterPipe implements PipeTransform {

  transform(contentArray: Content[], type?:string){
    if (!contentArray){
      return contentArray;
  }
    else{
      return contentArray.filter((Movie)=>{
        return Movie.type?.toLowerCase() === type?.toLowerCase()
});
}
  }

}
