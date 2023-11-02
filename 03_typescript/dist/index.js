"use strict";
// class User{
//   public  email:string
//   private  name:string
//     constructor(email:string,name:string){
//         this.name=name,
//         this.email=email
//     }
// }
// const nigam =new User('nigam@gmail.com','nigam')
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; //private only accessed within the class
        (this.name = name), (this.email = email);
    }
    get getappleEmail() {
        return `apple ${this.email}`;
    }
    deleteToken() {
        console.log('tokenn deleted');
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            console.log('whatever');
        }
        this._courseCount = courseNumber;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const nigam = new User("nigam@gmail.com", "nigam");
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log('');
    }
}
