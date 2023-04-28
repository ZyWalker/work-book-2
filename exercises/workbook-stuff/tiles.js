var room = {
    length:15,
    width:17
}

function boxesOfTiles(room) {
    return((room.length *room.width)/12);
}

console.log("You would need " + Math.round(boxesOfTiles(room)) + " boxes.")

console.log("You should buy " + Math.round(boxesOfTiles(room) *1.1) + " boxes.")