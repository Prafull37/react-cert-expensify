import filterReducer,{filterState} from "../../../src/redux/reducers/filterReducer";
import {setTextFilter,setEndDate,setStartDate,sortByDate,sortByAmount} from "../../../src/redux/actionCreators/filterAction";
import moment from "moment"

test("should return default filter value",()=>{
    const filter=filterReducer(filterState,{type:"Something"});
    expect(filter).toEqual(filterState);
})

test("should set sortBY to Amount filter value",()=>{
    const output={
        ...filterState,
        sortBy:"amount"
    }
    const filter=filterReducer(filterState,sortByAmount());
    expect(filter).toEqual(output);
})

test("should set sortBY to Amount filter value",()=>{
    const input={
        ...filterState,
        sortBy:"amount"
    }
    const filter=filterReducer(input,sortByDate());
    expect(filter).toEqual(filterState);
})

test("should set sortBY to Amount filter value",()=>{
    const input={
        ...filterState,
        sortBy:"amount"
    }
    const filter=filterReducer(input,sortByDate());
    expect(filter).toEqual(filterState);
})

test("should set text to given  value",()=>{
    const output={
        ...filterState,
        text:"e"
    }
    
    const filter=filterReducer(filterState,setTextFilter("e"));
    expect(filter).toEqual(output);
})

test("should set startDate to given  value",()=>{
    const output={
        ...filterState,
        startDate:moment(1000)
    }
    
    const filter=filterReducer(filterState,setStartDate(moment(1000)));
    expect(filter).toEqual(output);
})


test("should set endDate to given  value",()=>{
    const output={
        ...filterState,
        endDate:moment(1000)
    }
    
    const filter=filterReducer(filterState,setEndDate(moment(1000)));
    expect(filter).toEqual(output);
})



// test("should return default filter value",()=>{
//     const filter=filterReducer(filterState,{type:"Something"});
//     expect(filter).toEqual(filterState);
// })


// test("should return default filter value",()=>{
//     const filter=filterReducer(filterState,{type:"Something"});
//     expect(filter).toEqual(filterState);
// })

