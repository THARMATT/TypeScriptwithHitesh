"use strict";
//what is the use of abstract class when interfaces are available
//interface : set of rules
//abstract class :exact blueprint
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 0;
    }
}
class Instagrm extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSpace() {
        console.log("hey space");
    }
}
// const ngam=new TakePhoto('test','test',8)
//cant declare instaces
