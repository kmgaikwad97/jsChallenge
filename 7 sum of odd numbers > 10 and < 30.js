// #7: Calculate the sum of odd numbers greater than 10 and less than 30

let sum=null;
for(let i=1;i<=30;i++){
    if(i>10 && i<=30){
        if(i % 2 !== 0){
            sum+=i;   
        }
    }
}
console.log("Odd numbers Sum from 10-30",sum);