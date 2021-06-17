var arr=[3,4,5]
var sum=0;
for(let num of arr)
{
    sum+=num; //sum=12

}
console.log(sum);
var op=[]
for(let num of arr)
{
    let res=sum-num; //res=12-3 =9, 12-4=8, 12-5=7
    op.push(res) //[9,8,7]
}
console.log(op);