function padNumList(arr, len) {

    const result = arr.map(num => 
        num.toString().padStart(len, '0')
    );
    return result;

};





// padNumList([1, 22, 33], 2);
// returns ["01", "22", "33"]

padNumList([1, 22, 33], 5);
// returns ["00001", "00022", "00033"]

// padNumList([1000, 0, 3], 3);
// returns [1000, 000, 003]