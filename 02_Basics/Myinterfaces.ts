interface User{
    name:string,
    email:string,
    id:number,
    startTrail:()=>string,
    startTrail2():string,
    getCoupon(couponName:string):number
}

//loose form of class like type
const nigM:User={email:'h@gmail.com',id:55,name:'nigam',
startTrail:()=>{
    return 'logic'
},startTrail2:()=>{
    return 'logic'
},
getCoupon:(name:'Nigam')=>{
    return 10
}}

//little bit more about interface
