
//what is the use of abstract class when interfaces are available
//interface : set of rules
//abstract class :exact blueprint
abstract class TakePhoto{
    constructor(
public cameraMode:string,
public filter:string,

    ){}
  abstract getSpace():void
  getReelTime():number{
    //some complex calculation
    return 0
  }
}
class Instagrm extends TakePhoto{
constructor(
    public cameraMode:string,
    public filter:string,
    public burst:number
){
    super(cameraMode,filter)
}
getSpace():void{
    console.log("hey space")
}
}

// const ngam=new TakePhoto('test','test',8)
//cant declare instaces