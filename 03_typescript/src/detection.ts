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

