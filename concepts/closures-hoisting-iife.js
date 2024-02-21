let sum = function(a) {
    console.log("live Viewer" + a)
    let c = 4;
    return function (b) {
        return function (d) {
            return function (e) {
                return a + b + c + d + e
            }
        }

    }
}
let result = sum(200);
//console.log(result.prototype)
let conc = result(10);
let conn = conc(10);
console.log(conn(10));