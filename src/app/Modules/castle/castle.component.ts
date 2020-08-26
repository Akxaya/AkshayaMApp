import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import * as _ from 'lodash';
import { stringify } from '@angular/compiler/src/util';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-castle',
  templateUrl: './castle.component.html',
  styleUrls: ['./castle.component.css']
})
export class CastleComponent implements OnInit {
  arrData: any = [1, 4, 5, 6, 2, 4, 8, 5, 3, 6];
  peak: any;
  valley: any;
  valueCheck: boolean = true;
  lbResult: string = "Please enter (,) seperated array & click execute";
  lbAssignment: string = null;
  lbApproach: string = null;
  constructor(private _srccastle: DataService) { }

  ngOnInit(): void {debugger;
    this.lbAssignment = this._srccastle.GetAssignment("castle");
    this.lbApproach = this._srccastle.GetApproach();

  }
  Execute() {
    var arr = _.split(this.arrData, ',').map(function (item) { return parseInt(item) });

    if (_.isEmpty(arr) || _.isEmpty(this.arrData)) {
      arr = _.split("1, 4, 5, 6, 2, 4, 8, 5, 3, 6", ',').map(function (item) { return parseInt(item); });
    }

    var _max = _.max(arr);
    var _min = _.min(arr);
    this.lbResult = "Result for {" + _.flatMap(arr) + "}";

    this.peak = _max;
    this.valley = _min;
    //
    this.checkPeakValley(arr);
  }//execute

  checkPeakValley(arr) {
    var peak = [];
    var valley = [];
    _.each(arr, function (i) {
      var nextbit = i + 1;
      var prevbit = i - 1;
      var currentbit = arr[i];
      var arrlength = arr.length;

      ///////  this.isPeak(arr, arr.length, arr[i], i - 1, i + 1);
      var valCheck = true;

      if (nextbit >= 0 && arr[nextbit] > arrlength)
        valCheck = false;

      if (prevbit < currentbit && arr[prevbit] < arrlength)
        valCheck = false;

      if (valCheck)
        peak.push(arr[i]);

      //this.isValley(arr, arr.length, arr[i], i - 1, i + 1);
      valCheck = true;

      if (nextbit >= 0 && arr[nextbit] < arrlength)
        valCheck = false;

      if (prevbit < currentbit && arr[prevbit] < arrlength)
        valCheck = false;

      if (valCheck)
        valley.push(arr[i]);

    });

    console.log('peak:' + peak);
    console.log('valley:' + valley);

  }//peakValley
}
