import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TransformerVital } from '../../Class/bots';
import { DataService } from 'src/app/Service/data.service';
import * as _ from 'lodash';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TransformerResultComponent } from '../transformer-result/transformer-result.component';
import { Observable } from 'rxjs/internal/Observable';
import { from, forkJoin } from 'rxjs';

@Component({
  selector: 'app-battle-ground',
  templateUrl: './transformer-battle-ground.component.html',
  styleUrls: ['./transformer-battle-ground.component.sass'],
  providers: [DataService]
})

export class TransformerBattleGroundComponent implements OnInit, AfterViewInit {
  autobot: string = 'autobot';
  Decepticon: string = 'Decepticon';
  SelectedBotId: number;
  AutoBotVitals: any = [];
  DecepticonVitals: any = [];
  AutoBotName: string;
  DecepticonName: string;
  fightResult: string;
  constructor(private service: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (_.isEmpty(this.SelectedBotId)) {
          
          // forkJoin([this.service.getTransformerBots, this.service.getTransformersVitals])
          // .subscribe(result=>{ 
          //   debugger;
          //   var rst= result[0];
          // });
    }
  }

  GetSelectedBot(botID: number) {
    this.SelectedBotId = botID;
    this.GetTransformerVitals(this.SelectedBotId);
  }

  GetTransformerVitals(_selectedID) {
    this.service.getTransformerBots().subscribe(item => {
      this.service.getTransformersVitals().subscribe(data => {
        var vitals = _.omit(_.first(_.filter(data, botsvitals => botsvitals.ID == _selectedID)), ['ID']);
        var Botdata = _.first(_.filter(item, i => i.ID == _selectedID));
        var _type = Botdata.Type;       
        if (_type == this.autobot) {
          this.AutoBotName = Botdata.Name;
          this.AutoBotVitals = vitals;
        }
        else if (_type == this.Decepticon) {
          this.DecepticonName = Botdata.Name;
          this.DecepticonVitals = vitals;
        }
      });
    });
  }

  fight() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      "autobot": this.AutoBotVitals,
      "decepticon": this.DecepticonVitals
    }
    //var fightResult = this.service.getFightResult(this.AutoBotVitals, this.DecepticonVitals);
    this.dialog.open(TransformerResultComponent,{
    });

  }

}

