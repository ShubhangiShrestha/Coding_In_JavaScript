const forEach=(valueOfEachItem,totalValueOfItem)=>{
    return (totalValueOfItem(valueOfEachItem,0));
}

const totalValueOfItem = (valueOfEachItem,finalValue) =>{
    for(let i=0;i<valueOfEachItem.length;i++)
        finalValue+=valueOfEachItem[i];
    return (finalValue*noOfEachItem);
}

const valueOfEachItem=[10,20,43,18,90];
const noOfEachItem=10;
const finalSum=forEach(valueOfEachItem,totalValueOfItem);
console.log(finalSum);

