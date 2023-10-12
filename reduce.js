const reduce = (initialArray,addTheValues) => {
    let totalAddedValue=0;//sum=0,sum+=
    for(let i=0;i<initialArray.length;i++){
        totalAddedValue=addTheValues(initialArray[i],totalAddedValue);
    }
    return totalAddedValue;
}
const addTheValues = (currentValueAtIndex,totalAddedValue) =>{
        return (currentValueAtIndex+totalAddedValue);
}


const initialArray=[10,12,20.25,35.6,98.2];
const total=reduce(initialArray,addTheValues);
console.log(total);


/*
The reduce() method returns a single value: the function's accumulated result.
Syntax:array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/