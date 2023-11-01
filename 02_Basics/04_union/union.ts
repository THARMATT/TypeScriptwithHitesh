let score:number|string|boolean =33
score=55
score='44'


type User={
    name:string;
    id:number;
}
type Admin={
    username:string;
    id:number
}
let Migam:User|Admin={name:'nigam',id:344}
Migam={username:'nh',id:577}
function getDbId(id:number|string){
    console.log(`DB id is :${id}`)

}
getDbId(3)
getDbId('8')