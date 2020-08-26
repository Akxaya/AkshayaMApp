import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, combineLatest } from 'rxjs';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { KeyValue } from '@angular/common';
import { CDK_DESCRIBEDBY_HOST_ATTRIBUTE } from '@angular/cdk/a11y';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  //Get Bot information
  getTransformerBots(): Observable<any> {
    var _jsonURL = 'assets/transformers.json';
    return this.http.get(_jsonURL);
  }

  //Get Transformer Vitals
  getTransformersVitals(): Observable<any> {
    var _jsonURL = 'assets/transformersVitals.json';
    return this.http.get(_jsonURL);
  }

  getTransformerRank(): Observable<any> {
    var _jsonRankURL = 'assets/transformerRank.json';
    return this.http.get(_jsonRankURL);
  }

  getFightResult(AutoBot: any, Decepticon: any): any {
    var winner: [];
    var evaluation = [];  
    
    winner = this.courageStrengthCheck(AutoBot, Decepticon);

    evaluation.push({ "Factor":"Check 01: Courage / strength", "Note":(!_.isEmpty(winner))});

    if(_.isEmpty(winner)) {
    winner = this.skillCheck(AutoBot,Decepticon);
    evaluation.push({ "Factor":"Check 02: Skill ", "Note":(!_.isEmpty(winner))});
    }
    else
    evaluation.push({ "Factor":"Check 02: Skill ", "Note":(_.isEmpty(winner))});

    if (_.isEmpty(winner)) {
      var statsPlayer1: number = this.OverAllRating(AutoBot);
      var statsPlayer2: number = this.OverAllRating(Decepticon);
      winner=(statsPlayer1 > statsPlayer2) ? AutoBot : Decepticon;
      evaluation.push({ "Factor": "Check 03: Over all rating ", "Note": !_.isEmpty(winner) });
    }
    else
    evaluation.push({ "Factor": "Check 03: Over all rating ", "Note": false });
    
    return _.assign(winner,{"evaluation":evaluation},
                          {"AutobotVitals": _.flatMap(_.omit(AutoBot,["ID"]))},
                          {"DecepticonVitals":  _.flatMap(_.omit(Decepticon,["ID"]))}
                          );
  }//getFightResult

  courageStrengthCheck(AutoBot: any, Decipticon: any): any {
    var check: any;
    if ((AutoBot.courage > Decipticon.courage) && (AutoBot.strength > Decipticon.strength)) {
      check = ((_.subtract(AutoBot.courage, Decipticon.courage) > 4)
        && (_.subtract(AutoBot.strength, Decipticon.strength) > 3)) ? AutoBot : [];
    }
    else if ((AutoBot.courage < Decipticon.courage) && (AutoBot.strength < Decipticon.strength)) {
      check = ((_.subtract(Decipticon.courage, AutoBot.courage) > 4)
        && (_.subtract(Decipticon.strength, AutoBot.strength) > 3)) ? Decipticon: [];
    }
    else
      check = [];
    return check;
  }//courageStrengthCheck

  skillCheck(AutoBot: any, Decipticon: any): any {
    var check: any;
    if (AutoBot.skill > Decipticon.skill) {
      check = (_.subtract(AutoBot.skill, Decipticon.skill) > 3) ? AutoBot : [];
    }
    else if (AutoBot.skill < Decipticon.skill) {
      check = (_.subtract(Decipticon.skill, AutoBot.skill) > 3) ? Decipticon : [];
    }
    else
      check = [];
    return check;
  }//skill

  OverAllRating(player): number {
    return _.sum(
      _.values(
        _.pick(player, ['strength', 'intelligence', 'speed', 'endurance', 'firepower'])
      )
    );
  }//Over All

GetAssignment(part) {
    if (part == "castle")
      return "<p>Aequilibrium is in the business of building castles (we really aren&rsquo;t, but let&rsquo;spretend). Now, we alsobelieve in quality aesthetics, so we only want to build castles in two"
        + " types of places:</p> <p>a. Peaks</p> <p>b. Valleys</p>  <p>Let&rsquo;s say you have an array of integers that describes a stretch of land, where each integer represents the current height of the land. Can you write a function that reads that array and returns the"
        + " number of castles that Aequilibrium should build on that stretch of land? You can write this solution in whatever language you like and provide a way to test it.</p>"
        + "<p>You can make the following assumptions:</p>"
        + " <p>● You can always build a castle at the start of the array, provided it is non-empty</p>"
        + "<p>● You can always build a castle at the end of the array, provided it is non-empty</p>"
        + "<p>● We only want to build one castle per peak or valley.</p>"
        + "<p>● A peak is an integer or series of integers that is above the immediately preceding and following  For example, in the sequence [2,6,6,6,3] the sequence of three 6s is a peak.</p>"
        + "<p>● A valley is an integer or series of integers that is below the immediately preceding and</p>"
        + "<p>following ints. For example, in the sequence [6,1,4] the &quot;1&quot; would be a valley.</p>";

    else if (part == "transformer")
      return "";

  }//GetAssignment
  
GetApproach() {
    return "<p>Peak and Valley are max and min values for the input array respectively. &nbsp;</p>"
      + "<ul><li>Angular 10</li>"
      + "<li>Bootstrap styles are used for UI</li>"
      + "<li>Icons are fetched from Fontawesome </li>"
      + "<li>Lodash 4.3 used.</li></ul>"

      + "second Consideration : For every element of the array, check whether the current element is a peak(the element has to be greater than its neighbouring elements) or a trough(the element has to be smaller than its neighbouring elements).";
  }//GetApproach

  GetTransformerRequirment() {
    return "<p>Part 2: The Transformation Company<br>" +
      "Aequilibrium does love transforming&#8230; people, lives, teams, companies. And there&rsquo;s no better<br>" +
      "representation of transformation than Hasbro&rsquo;s Transformers, the classic television series featuring<br>" +
      "heroic Autobots raging their battle to destroy the evil forces of the Deceptions.<br>" +
      "Please watch this video: https://www.youtube.com/watch?v=nLS2N9mHWaw<br>" +
      "The Transformers are at war and you are in charge of settling the score! For this part of the assignment<br>" +
      "please build a web application that evaluates who wins a fight between the Autobots and the<br>" +
      "Decepticons. You have the option to use any modern web framework. The input data can be static, there<br>" +
      "is no need to persist any data or provide any back-end services. However, we will be testing the solution<br>" +
      "against multiple use cases besides the basic example. Please include instructions on how to run and use<br>" +
      "your solution.<br>" +
      "Here are the rules of a battle:<br>" +
      "Each Transformer has the following criteria on their tech spec (see this for an example):<br>" +
      "&#9679; Strength<br>" +
      "&#9679; Intelligence<br>" +
      "&#9679; Speed<br>" +
      "&#9679; Endurance<br>" +
      "&#9679; Rank<br>" +
      "&#9679; Courage<br>" +
      "&#9679; Firepower<br>" +
      "&#9679; Skill<br>" +
      "All of these criteria are ranked from 1 to 10.<br>" +
      "The &ldquo;Overall Rating&rdquo; of a Transformer is the following formula:<br>" +
      "Strength + Intelligence + Speed + Endurance + Firepower<br>" +
      "Each Transformer must either be an Autobot or a Deception.<br>" +
      "Your program should take the input that describes a group of Transformers and based on that group<br>" +
      "displays:<br>" +
      "a. The number of battles<br>" +
      "b. The winning team<br>" +
      "c. The surviving members of the losing team<br>" +
      "The basic rules of the battle are:<br>" +
      "&#9679; The teams should be sorted by rank and faced off one on one against each other in order to<br>" +
      "determine a victor, the loser is eliminated<br>" +
      "&#9679; A battle between opponents uses the following rules:<br>" +
      "&#9675; If any fighter is down 4 or more points of courage and 3 or more points of strength<br>" +
      "compared to their opponent, the opponent automatically wins the face-off regardless of<br>" +
      "overall rating (opponent has run away)<br>" +
      "&#9675; Otherwise, if one of the fighters is 3 or more points of skill above their opponent, they win<br>" +
      "the fight regardless of the overall rating<br>" +
      "&#9675; The winner is the Transformer with the highest overall rating<br>" +
      "&#9679; In the event of a tie, both Transformers are considered destroyed<br>" +
      "&#9679; Any Transformers who don&rsquo;t have a fight are skipped (i.e. if it&rsquo;s a team of 2 vs. a team of 1, there&rsquo;s<br>" +
      "only going to be one battle)<br>" +
      "&#9679; The team who eliminated the largest number of the opposing team is the winner<br>" +
      "Special rules:<br>" +
      "&#9679; Any Transformer named Optimus Prime or Predaking wins his fight automatically regardless of<br>" +
      "any other criteria<br>" +
      "&#9679; In the event, either of the above face each other, or a duplicate of each other, the game<br>" +
      "immediately ends with all competitors destroyed<br>" +
      "Example:<br>" +
      "Given the following input: The output should be:<br>" +
      "Soundwave, D, 8,9,2,6,7,5,6,10<br>" +
      "Bluestreak, A, 6,6,7,9,5,2,9,7<br>" +
      "Hubcap: A, 4,4,4,4,4,4,4,4<br>" +
      "1 battle<br>" +
      "Winning team (Decepticons): Soundwave<br>" +
      "Survivors from the losing team (A</p>";
  }//Transformer Req
}
