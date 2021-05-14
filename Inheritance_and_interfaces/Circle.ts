import { Shape } from './Shape';

export class Circle extends Shape {

  

  constructor(theX:number,theY:number,private _radiusNumber: number) {
    super(theX,theY)
  }
 
  public get radius(): number {
    return this._radiusNumber;
  }
  public set radius(value : number) {
    this._radiusNumber = value;
  }
  getInfo() : string {
    return super.getInfo() + `, radius=$(this._radius)`; 
  }
}