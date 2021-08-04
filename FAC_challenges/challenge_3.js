function divisible(array) {
    const finalArray = array.filter(number => number % 3 === 0);
    return finalArray;
    // console.log(finalArray);

}

divisible([2, 4, 6, 8, 9, 12, 15, 16]);