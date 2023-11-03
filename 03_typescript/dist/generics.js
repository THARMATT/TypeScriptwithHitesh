"use strict";
//tu vase b kush nhikar skta 
//generics
//:to reuse code and majorly for typesafety practice
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identitytwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("4");
function identityFour(val) {
    return val;
}
identityFour("hey Parul");
identityFour({ brand: "string",
    type: 6 });
//to simplify the code and reusabilty of code
function getSearchProducts(products) {
    //do some dta opeetaions
    const myIndex = 3;
    return products[myIndex];
}
const getMoreProducts = (prodcuts) => {
    const myIndex = 9; //feeling littlebit creative   
    return prodcuts[myIndex];
};
