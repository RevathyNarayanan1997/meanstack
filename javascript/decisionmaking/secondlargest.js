var first_number=2;
var second_number=5;
var third_number=3;
var fourth_number=6;
var temp;


if (first_number > second_number)      //2>5 = false
    {                                   //this block is not executed as the condition is false
        temp = first_number;
        first_number = second_number;
        second_number = temp;
    

}
if (third_number > fourth_number)    //0>3 = false
    {                                 //this block is not executed as the condition is false
        temp = third_number;
        third_number = fourth_number;
        fourth_number = temp;
    }


if (first_number > third_number)      //2>0 = true
    {                                 //this block will be executed
        temp = first_number;            // temp = 2
        first_number = third_number;   //first_number = 0;
        third_number = temp;           //third_number = 2
    }


if (second_number > fourth_number)   //5>3 = true
    {
        temp = second_number;       //temp = 5
        second_number = fourth_number;   //second_number = 3
        fourth_number = temp;        //fourth_number = 5
    }


if (second_number > third_number)     //3>0 = true
    {
         temp = second_number;     //temp = 3
         second_number = third_number;  //second_number = 2
         third_number = temp;          //third_number = 3
    }

//from above code, we get first_number = 0, second_number = 2, third_number = 3, fourth_number = 5


console.log(sort order)
}


