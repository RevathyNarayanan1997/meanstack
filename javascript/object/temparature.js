var temparature=[
    {district:"tvm",temprature:25},
    {district:"kollam",temprature:27},
    {district:"kottayam",temprature:24},
    {district:"ekm",temprature:27},
    {district:"tsr",temprature:25},
    {district:"pkd",temprature:30},
    {district:"tvm",temprature:27},
    {district:"kollam",temprature:25},
    {district:"kottayam",temprature:28},
    {district:"ekm",temprature:29},
    {district:"tsr",temprature:30},
    {district:"pkd",temprature:31},

]
var weather={}
for(let data of temparature){
    let district=data["district"];
    let temp=data["temprature"];
    if(district in wheather){
   
        let old_Temp=wheather[data[temp]]
    }

   
}

else{
    wheather[data["district"]]=data["temp"]
}
}
console.log(wheather);


//sort weather according to temparature in descending order
