export class Shape{
    
 
    constructor(private _x: number,private _y: number) {
        
    }

  public set_x(): number {
    return this._x;
  }

  public set_y(): number {
    return this._y;
  }


  public get_x(): number {
    return this._x;
  }

  public get_y(): number {
    return this._y;
  }
    
    getInfo(): string{
        return `x = ${this._x}, y = ${this._y}`
     }

}