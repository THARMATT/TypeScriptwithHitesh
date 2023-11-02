// class User{
//   public  email:string
//   private  name:string
//     constructor(email:string,name:string){
//         this.name=name,
//         this.email=email
//     }
// }
// const nigam =new User('nigam@gmail.com','nigam')
class User {
    protected _courseCount=1 //private only accessed within the class
  constructor(public email: string, public name: string) {
    (this.name = name), (this.email = email);
  }
  get getappleEmail():string{
    return `apple ${this.email}`
}
private deleteToken(){
    console.log('tokenn deleted')
}
get courseCount():number{
    return this._courseCount
}
set courseCount(courseNumber){
if(courseNumber<=1){
    console.log('whatever')
}
this._courseCount=courseNumber
}
}

class subUser extends User{
isFamily:boolean=true
changeCourseCount(){
    this._courseCount=4
}
}
const nigam = new User("nigam@gmail.com", "nigam");

//getter and setter and access modifier

interface TakePhoto{
    cameraMode:string
    filter:string
    burst:number
}
class Instagram implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}
class Youtube implements TakePhoto,Story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public short:string 
    ){}
    createStory ():void{
        console.log('')
    }
}
interface Story{
    createStory():void
}
