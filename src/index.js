module.exports = function reverse (n) {
    let a = n < 0 ? Math.abs(n) : n;
    return a.toString().split('').reverse().join('') * 1
}
