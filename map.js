let map=(arrayList,callbackFunction)=>{
    if(callbackFunction==multiplyWithNine){
        return multiplyWithNine(arrayList);    
    } 
    else if(callbackFunction==addTwo){
        return addTwo(arrayList);
    }     
}
const multiplyWithNine=(arrayList)=>{
    let newArrayList=[];
    for(let i=0;i<arrayList.length;i++){
        newArrayList.push(arrayList[i]*9); 
    }
    return newArrayList; 
}
const addTwo=(arrayList)=>{
    let newArrayList=[];
    for(let i=0;i<arrayList.length;i++){
        newArrayList.push(arrayList[i]+2); 
    }
    return newArrayList;    
}

const arrayList=[10,18,20,24,28];
const newList=map(arrayList,addTwo);
console.log(newList);