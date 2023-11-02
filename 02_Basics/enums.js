// const Aisle=0
// const middle=1
// const window=2
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["Aisle"] = 0] = "Aisle";
    SeatChoice[SeatChoice["Middle"] = 1] = "Middle";
    SeatChoice[SeatChoice["Window"] = 2] = "Window";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.Window;
