export class TransformerConstants{
    public  getTransformersURL: string ="/transformers";
    public gettransformersVitals:string ="/vitals";
    public posttransformerBattleHistory:string = "/battlehistory";
}
export interface ApiUrl {
    transformers: string ;
    transformersVitals: string;
    battleHistory:string;
  }