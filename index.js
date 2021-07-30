let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * arr.length);

        [arr[i], arr[rand]] = [arr[rand], arr[i]];
    }
    return arr;
}
let result = shuffleArray(arr);
console.log(result);