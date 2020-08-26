import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceCastleService {

  constructor() { }
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

  }

  GetApproach() {
    return "<p>Peak and Valley are max and min values for the input array respectively. &nbsp;</p>"
      + "<ul><li>Angular 10</li>"
      + "<li>Bootstrap styles are used for UI</li>"
      + "<li>Icons are fetched from Fontawesome </li>"
      + "<li>Lodash 4.3 used.</li></ul>"
    
      +"second Consideration : For every element of the array, check whether the current element is a peak(the element has to be greater than its neighbouring elements) or a trough(the element has to be smaller than its neighbouring elements).";
  }
}
