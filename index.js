function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// test
// console.log(getRandomInt(1,10));
module.exports = {
    getRandomInt,
}