var state={name:"kerala",confirmed_cases:12000,cured:5000}


//state name
console.log(state.name);
console.log(state.confirmed_cases);

//death is exist and add death:100

if("death" in state)
{
    state["death"]=100
}
console.log(state);

//
console.log(state.cured);