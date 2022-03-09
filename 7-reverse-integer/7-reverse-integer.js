var reverse = function(x) {
    let r = 0;
    while (x) {
        r *= 10;
        r += x % 10;
        x = x / 10 | 0
    }
    return r < -(2 ** 31) || r > (2 ** 31) - 1 ? 0 : r;
};