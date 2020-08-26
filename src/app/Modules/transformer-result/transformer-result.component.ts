import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataService } from 'src/app/Service/data.service';
import { forkJoin } from 'rxjs';
import * as _ from 'lodash';
import { map } from 'lodash';
import { TransformerBattle } from 'src/app/Class/bots';

@Component({
  selector: 'app-transformer-result',
  templateUrl: './transformer-result.component.html',
  styleUrls: ['./transformer-result.component.css']
})
export class TransformerResultComponent implements OnInit {
  bots: any = [];
  battle: any[] = [];
  autobotLineup: any = [];
  decepticonLineUp: any = [];
  Vitals: any = [];
  showfight = new Map();
  result: any = [];
  AllBotDestoryed: boolean = false;
  specialRuleWin: boolean = false;
  fights: number = 0;
  winnerGroup: any;

  constructor(public service: DataService) { }

  ngOnInit(): void {
    forkJoin([this.service.getTransformerBots(), this.service.getTransformerRank(), this.service.getTransformersVitals()])
      .subscribe(result => {
        this.bots = result[0];

        this.autobotLineup = _.sortBy(_.filter(_.merge([], result[0], result[1]), bot => bot.Type === "autobot"), 'Rank');
        this.decepticonLineUp = _.sortBy(_.filter(_.merge([], result[0], result[1]), bot => bot.Type === "Decepticon"), 'Rank');
        this.Vitals = result[2];

        for (var i = 0; i < (this.autobotLineup > this.decepticonLineUp ? this.autobotLineup.length : this.decepticonLineUp.length); i++) {
          var winner: any; var evaluation = []; this.specialRuleWin = false;
          var TmpAutbotVital = _.head(_.filter(this.Vitals, v => v.ID === this.autobotLineup[i].ID));
          var TmpDecepticonVital = _.head(_.filter(this.Vitals, v => v.ID === this.decepticonLineUp[i].ID));

          if (((this.autobotLineup[i]).Name === "Optmus Prime") || ((this.decepticonLineUp[i]).Name === "Predaking")) {

            winner = _.head(_.filter(this.Vitals, v => v.ID === ((this.autobotLineup[i]).Name === "Optmus Prime")
              ? this.autobotLineup[i].ID : this.decepticonLineUp[i].ID));

            if (((this.autobotLineup[i]).Name === "Optmus Prime") && ((this.decepticonLineUp[i]).Name === "Predaking"))
              this.AllBotDestoryed = true;



            evaluation.push({ "Factor": "Special Rule: This Transformer is too Strong!", "Note": true })
            winner = _.assign(winner, { "evaluation": evaluation },
              { "AutobotVitals": _.flatMap(_.omit(TmpAutbotVital, ["ID"])) },
              { "DecepticonVitals": _.flatMap(_.omit(TmpDecepticonVital, ["ID"])) }
            );

            this.specialRuleWin = true;
          }//spl

          if (!this.specialRuleWin) {
            winner = this.service.getFightResult(TmpAutbotVital, TmpDecepticonVital);
          }//if OP/Pef
          var _battle = {
            "AutobotID": this.autobotLineup[i].ID,
            "AutobotName": this.autobotLineup[i].Name,
            "AutobotVitals": winner.AutobotVitals,
            "DecepticonID": this.decepticonLineUp[i].ID,
            "DecepticonName": this.decepticonLineUp[i].Name,
            "DecepticonVitals": winner.DecepticonVitals,
            "WinnerID": winner.ID,
            "WinnerName": _.head(_.filter(this.bots, bot => bot.ID === winner.ID)).Name,
            "evaluation": winner.evaluation
          };
          this.battle.push(_battle);
        }//for
        var AutoWin: number = 0; var DecpWin: number = 0;
        this.fights = this.battle.length;
        if (this.AllBotDestoryed){
          this.winnerGroup = "All destroyed";

        }
        else
          this.battle.forEach(win => {
            if (win.WinnerID === win.AutobotID)
              AutoWin++;
            else
              DecpWin++;

            this.winnerGroup = AutoWin > DecpWin ? "Autobot" : "Decepticon";
          });

        //console.log(this.battle);
      });
  }

  GetWinner(keyval: any): any {

    var autobot = _.filter(this.Vitals, v => v.ID === (_.head(_.filter(this.autobotLineup, bot => bot.Name == keyval.key)).ID));
    var decepticon = _.filter(this.Vitals, v => v.ID === (_.head(_.filter(this.decepticonLineUp, bot => bot.Name == keyval.value)).ID));

    var winner = this.service.getFightResult(_.head(autobot), _.head(decepticon));
    return _.head(_.filter(this.bots, bot => bot.ID === winner.ID)).Name;
    //return winner;
  }

  getBotName(value: any): any {
    return _.head(
      _.filter(this.autobotLineup, a => a.ID ===
        _.head(
          _.filter(this.Vitals, v => v.ID === value.ID)
        ).ID)
    );

  }//getBotName

  getStyle(value) {
    return (value) ? 'chartreuse' : 'firebrick';
  }
}
