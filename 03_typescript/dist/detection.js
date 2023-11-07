"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('please Provide Id');
        return;
    }
    id.toLowerCase();
}
function isAdminAcc(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
//do it for switch case 
//almost done but i learned about just typescript is for type casting
