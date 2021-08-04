function lookThroughObject(a, b) {
    const objArr = Object.entries(a);
    const array = [];
    // b();
    
    objArr.forEach( ([key, value]) => {
        if (b(value) === true) {
            array.push([key, value]);
        }
    })
    
    // console.log(array);
    const finalObj = Object.fromEntries(array);
    // const finalObj = {...array};
    // console.log(finalObj);
    return finalObj;
}


// lookThroughObject({ name: 'Kim', age: 43, member: true }, (v) => typeof v === 'number')

lookThroughObject({ firstName: 'Kim', lastName: 'Berly', address: '123 fake street' }, (v) => v.length > 3)

// lookThroughObject({ a: [], b: -1, c: [1, 2] }, (v) => Array.isArray(v) && v.length > 0)