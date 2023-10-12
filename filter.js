const minimumAgeOfAdult=18;
const isAdult=(personAge)=>{
    if(personAge>= minimumAgeOfAdult)
        return true; 
}
const filter=(nameWithAge,isAdult)=>{
    let nameList=[];
    for(let i=0;i<nameWithAge.length;i++){
        if(isAdult(nameWithAge[i].age)){
            nameList.push(nameWithAge[i].name);
        }
    }
    return nameList;
}

const nameWithAge = [   {name:'Riya', age:'15'},
                        {name:'Diya', age:'21'},
                        {name:'Aman',age:'24'},
                        {name:'Ayush',age:'17'},
                        {name:'Sakshi', age:'23'}
                    ];
const newList=filter(nameWithAge,isAdult);
console.log(newList);


//Syntax in Js:- array.filter(function(currentValue, index, arr), thisValue)

/* thisValue = nameWithAge, function = isAdult
   Inside function index and array are optional
   So, currentValue=personAge.
*/
                    