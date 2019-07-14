function reverseNumber(num) {
    let result = 0, n;
    while (num) {
        n = num % 10;
        result = (result * 10) + n;
        num = num/10|0;
    }
    return result;
}
reverseNumber(-123450000);