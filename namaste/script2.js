a();
b();
function a() {
    console.log("a called");
}
var b = function () {
    console.log("b called");
}
function a() {
    console.log("a");
}
a();
console.log("End");