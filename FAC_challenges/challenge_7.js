function biggest(arr) {
  let biggestPrice = 0;

  for (obj of arr) {
    let sqmt = obj.sqft * 0.0929;
    let currentPrice = Math.floor(obj.price / sqmt);

    if (currentPrice > biggestPrice) {
      biggestPrice = currentPrice;
    }
  }

  return biggestPrice;
}

biggest(data); //returns 5382;






const data = [
  {
    id: 0,
    price: 700000,
    sqft: 7200,
  },
  {
    id: 1,
    price: 100000,
    sqft: 200,
  },
];




function biggestArr(arr) {
  let biggestPrice = 0;
  let highestPriceId = 0;
  const finalArr = [];

  for (obj of arr) {
    let sqmt = obj.sqft * 0.0929;
    let currentPrice = Math.floor(obj.price / sqmt);

    if (currentPrice > biggestPrice) {
      biggestPrice = currentPrice;
      highestPriceId = obj.id;
    }
  }

  if (biggestPrice != 0) {
    finalArr.push(highestPriceId, biggestPrice);
    return finalArr;
  } else {
    return null;
  }
}


biggestArr(data); //returns [29, 21958];



const data = [
  {
    id: 0,
    price: 200000,
    sqft: 100,
  },
  {
    id: 29,
    price: 408000,
    sqft: 200,
  },
];

