var point1 = {
    x:2,
    y:4
}
var point2 = {
    x:6,
    y:8
}

var distance = Math.sqrt((point2.x - point1.x)**2 + (point2.y - point1.y)**2)

console.log("The distance bewtween (" + point1.x + "," + point1.y + ") and "+ "(" + point2.x + "," + point2.y + ") is " + distance.toFixed(2) )