import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'points',
  pure: false
})
export class PointsPipe implements PipeTransform {

  transform(input: Player[], args: string): any {
    var output: Player[] = [];

    if(args === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].points >= 20) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (args === "mid") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].points > 10 && input[i].points < 20) {
            output.push(input[i]);
        }
      }
      return output;
    } else if (args === "low") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].points < 10) {
            output.push(input[i]);
        }
      }
      return output;
    } else {
    return input;
    }
  }

}
