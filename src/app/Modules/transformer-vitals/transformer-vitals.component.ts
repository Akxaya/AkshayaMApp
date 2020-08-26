import { Component, OnChanges, Input, AfterViewInit } from '@angular/core';
import { DataService } from '../../Service/data.service';
import { TransformerVital } from '../../Class/bots';
import * as _ from 'lodash';

@Component({
  selector: 'transformer-vitals',
  templateUrl: './transformer-vitals.component.html',
  styleUrls: ['./transformer-vitals.component.sass']
})
export class TransformerVitalsComponent implements OnChanges, AfterViewInit {
  @Input('BotID') BotID: number;
  @Input('Vitals') Vitals: TransformerVital[] = [];
  @Input ('BotName') BotName:string;
  constructor(private service: DataService) { }
  ngOnChanges(): void {
   
  }

  ngAfterViewInit() {
   
  }
}
