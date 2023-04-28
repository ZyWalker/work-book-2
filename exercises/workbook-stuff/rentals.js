var rentals = {
    pass:15,
    ppl:45,
    cost:250
}
 
function vans(rentals) {
    return(rentals.ppl/rentals.pass);
}

function price(rentals) {
    return((rentals.ppl/rentals.pass)*rentals.cost);
}

function perPerson(rentals) {
    return(((rentals.ppl/rentals.pass)*rentals.cost)/rentals.ppl)
}

console.log(vans(rentals))

console.log(price(rentals))

console.log(perPerson(rentals))
