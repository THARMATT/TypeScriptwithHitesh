function detectType(val:number|string|number){
    if(typeof val==="string"){
     return   val.toLowerCase()
    }
return val + 3
}
function provideId(id:string|null){
    if(!id){
        console.log('please Provide Id')
        return
    }
    id.toLowerCase()
}
// typeof||type guard
interface User{
    name:string,
    email:string
}
interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}
function isAdminAcc(account:User|Admin){
if('isAdmin' in account){
    return account.isAdmin
}
}
// learn typescript from docs
type Fish={swim:()=>void}
type Bird={fly:()=>void}

function isFish(pet:Fish|Bird){
 return  ( pet as Fish).swim !== undefined
}

function getFood( pet: Fish| Bird){
    if(isFish(pet)){
        pet 
        return "fish food"
    }
else{
    pet
    return "bird food"
}}