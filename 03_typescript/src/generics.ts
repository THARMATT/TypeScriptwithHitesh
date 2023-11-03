//tu vase b kush nhikar skta 
//generics
//:to reuse code and majorly for typesafety practice
const score:Array<number>=[]
const names:Array<string>=[]

function identityOne(val:boolean|number):boolean|number{
    return val
}
function identitytwo(val:any):any{
    return val
}
function identityThree<Type>(val:Type):Type{
    return val
}
identityThree("4")
function identityFour<T>(val:T):T{
    return val
}
identityFour("hey Parul")
interface Bottle{
    brand:string,
    type:number
}
identityFour<Bottle>({ brand:"string",
    type:6})
//to simplify the code and reusabilty of code

function getSearchProducts<T>(products:T[]):T{
    //do some dta opeetaions
    const myIndex=3
    return products[myIndex]
}
const getMoreProducts=<T>(prodcuts:T[]):T=>{
    const myIndex=9 //feeling littlebit creative   
    return prodcuts[myIndex]
}