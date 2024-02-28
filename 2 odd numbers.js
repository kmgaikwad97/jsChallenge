// #2: Print the odd numbers less than 100

// even
for(let s=0; s<=10; s+=2){
    console.log("Even Numbers",s);
}

// odd
for(let v=1;v<=10;v+=2){
    console.log("Odd Numbers",v);
}


const numbers = [0,1,2,3,4,5,6,7,8,9,10];
getEvenNum(numbers)
getOddNum(numbers)
function getEvenNum(num){
    for(e=0;e<=num.length;e++){
        if(num[e] % 2 === 0){
            console.log("Even Number =",num[e]);
        }
    }
} 
function getOddNum(num){
    for(o=0;o<num.length;o++){
        if(num[o]%2!==0){
            console.log("ODD Number =",num[o]);
        }
    }
}
