type User={
    readonly _id:string
    name:string,
    email:string
    isLogin:boolean
 credCardDetails?:number //flexibilty to assign 
}
let myUser:User={
    _id:'568985uj',
    name:'nigam',
    email:'h@gmail.com',
    isLogin:true
}
myUser.email='hs@gmail.com'
// myUser._id='jjjjj'//cant chNGE
// export{}