import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../Service/data.service';
import { TransformerBots } from '../../Class/bots';
import * as _ from 'lodash';
import { selectedbot } from 'src/app/Elements/Transformers-interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'transformer-line-up',
  templateUrl: './transformer-line-up.component.html',
  styleUrls: ['./transformer-line-up.component.sass']
})
export class TransformerLineUpComponent implements OnInit {
  bots: TransformerBots[] = [];
  @Input('botType') botType: string = "";
  @Output() BotSelected = new EventEmitter<number>();
  constructor(private service: DataService) { }

  ngOnInit(): void {
    forkJoin([this.service.getTransformerBots(), this.service.getTransformerRank()])
      .subscribe(result => {
        this.bots = _.sortBy(_.filter(_.merge([], result[0], result[1]), bot => bot.Type === this.botType), 'Rank');

        var value = _.first(this.bots);
        this.SelectedBot(value.ID, value.Type);
      });
  }

  SelectedBot(BotId: number, Type: string) {
    this.BotSelected.emit(BotId);
  }
}
