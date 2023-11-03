//tu vase b kush nhikar skta
//generics
//:to reuse code and majorly for typesafety practice
const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}
function identitytwo(val: any): any {
  return val;
}
function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree("4");
function identityFour<T>(val: T): T {
  return val;
}
identityFour("hey Parul");
interface Bottle {
  brand: string;
  type: number;
}
identityFour<Bottle>({ brand: "string", type: 6 });
//to simplify the code and reusabilty of code

function getSearchProducts<T>(products: T[]): T {
  //do some dta opeetaions
  const myIndex = 3;
  return products[myIndex];
}
const getMoreProducts = <T>(prodcuts: T[]): T => {
  const myIndex = 9; //feeling littlebit creative
  return prodcuts[myIndex];
};

interface Data {
  connection: string;
  username: string;
  id: number;
}
function genriucfunction<T, U extends Data>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}
genriucfunction(2, { connection: "", username: "", id: 0 });

interface Quiz {
  name: string;
 type: string;
  id: number;
}
interface Course {
  name: string;
  author: string;
  subject: string;
  id: number;
}
class SellCourse<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
