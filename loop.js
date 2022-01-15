// this function provides something like a for loop statement
function loop(value, condition, updation, body) {
    while (condition(value)) {
        body(value);
        value = updation(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);