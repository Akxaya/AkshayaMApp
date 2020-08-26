

export class transformer {
    ID: number;
    Name: string;
    Type:string;
  }
 
  export class selectedbot{
    Autobot:number =1;
    decepticon:number=1;
  }
//export class transformers {_transformers :Array<transformer>;}

  export class ApiUrl {
    transformers: string ;
    transformersVitals: string;
    battleHistory:string;
  }

  export class transformerVitals {
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

  export interface transformersbattleHistory{
      Battle :string;
      Player1: number;
      Player2: number;
      Winner:number; 
      When:Date;
  }

  export enum TransformType{
    Autobots,
    decepticons
  }