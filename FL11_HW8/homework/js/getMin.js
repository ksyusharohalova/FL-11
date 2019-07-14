function getMin(array) {
    array=[10, 20, 8];
    let min = array[0];
    for (let i =1; i< array.length; i++) {
        if (array[i]<min) {
            min = array[i];
        }
    }
    return min;
}
getMin(10, 20, 8);
