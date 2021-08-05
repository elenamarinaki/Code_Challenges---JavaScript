function capitaliseKeys(obj) {
    //turn object into an array
    const objArray = Object.entries(obj);


    //capitalize the keys in the array 
    objArray.forEach(idx => {
        idx[0] = idx[0].toUpperCase();
    });

    // turn the array into an object
    return Object.fromEntries(objArray);
};

capitaliseKeys({ a: 1, b: 2, c: 3 });
// capitaliseKeys({ Hello: 'hi' });