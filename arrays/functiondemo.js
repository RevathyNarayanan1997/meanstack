function oddeven(num){
    return num%2==0?false:true


}
console.log(oddeven(10));


//find factorial

function factorial(num){
    let ans=1;
    for(let i=1;i<=num;i++){
        ans=ans*i
    }
        return ans;
    
    }
console.log(factorial(5));


//subtract num1,num2


function sub(num1,num2){
    return num1<num2?num2-num1:num1-num2
   if(num1<num2){
       return num2-num1
   }
   else{
        return num1-num2
   }
}
console.log(sub(10,6));
console.log(sub(6,10));


//


function addNumbers(...params){
    let res=0;
    for(let num of params){
        res+=num
    }
    return res
}





console.log(addNumbers(10,20));

console.log(addNumbers(10,20,30));
console.log(addNumbers(10,20,30,40,50));