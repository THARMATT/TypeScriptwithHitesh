interface User{
    name:string,
    email:string,
    id:number,
    startTrail:()=>string,
    startTrail2():string,
    getCoupon(couponName:string):number
}

//loose form of class like type
const nigM:User|Admin={email:'h@gmail.com',id:55,name:'nigam',
startTrail:()=>{
    return 'logic'
},startTrail2:()=>{
    return 'logic'
},
getCoupon:(name:'Nigam')=>{
    return 10
}}

//little bit more about interface
interface Admin extends User{
role:'admin'|'learner'
}

// type alises: set your own type 
// interfaces:set of rules that you should follow
// Type Aliases are like giving a nickname to a type, making it easier to use and understand. They create new names for existing types.

// Interfaces are like a set of rules that objects or classes must follow. They describe what properties and methods an object should have.