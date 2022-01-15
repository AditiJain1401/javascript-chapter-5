// this function f(lattens an array of arrays into a single array
function flattening(array) {
    //reduce the given array and concat the items into a new array
    NewArray = array.reduce((a, b) => { return a.concat(b) }); 
    return NewArray;
}
console.log(flattening([[1, 2, 3],[4, 5],[5, 6]]));