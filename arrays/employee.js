/*var employees=[
                [100,"ram",20000,"developer"],
                [101,"ravi",22000,"developer"],
                [102,"raju",25000,"qa"],
                [103,"nithin",22000,"qa"]

        ]


for (let emp of employees){

console.log(emp[1]);
}
for(let emp of employees){
    if(emp[3]=="developer"){
        console.log(emp);
    }
 

} */
var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
     [107,"munch",5,10]
]
//console.log(products[6]);

//3.print costly products
for (let cost of products )
{
    if(cost[2]>150){
        console.log(cost);  
    }
  
}
//1.is there any item aailable under rs 10 ? true

for ( let cost of products)
{
    if(cost[2]<10){
        console.log(cost)
    }
}


//print low cost product




//print number of product in this shop
//print num of products in stock



//print details of boost



