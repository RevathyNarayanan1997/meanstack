var arr=[4,5,6]
var total=0;
for(let num of arr){
    total=total+num
}
console.log(total);
for(let num of arr){
    let res=total-num
    console.log(res);
}
