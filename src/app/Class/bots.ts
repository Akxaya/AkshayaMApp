export class Bots {
}

export class TransformerBots {
    ID: number;
    Name: string;
    Type: string;
  }
  
  export class TransformerVital {
    id: number;
    strength: number;
    endurance: number;
    firepower: number;
    intelligence: number;
    rank: number;
    skill: number;
    speed: number;
    courage: number;
  }
  
  export interface TransformerBattle{
    AutobotID:number;
    AutobotName:string;
    DecepticonID:Number;
    DecepticonName:string;
    WinnerID:number;
    WinnerName:string;
    WinningNotes:string;
  }