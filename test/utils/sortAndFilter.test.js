import moment from "moment";
import getVisibleExpense from "../../src/utils/sortAndFilter";
import expenses from "../fixtures/expense";

test("filter by text only",()=>{
    const filters={
        text:"e",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    }

    const selector=getVisibleExpense(expenses,filters);
    expect(selector).toEqual([expenses[2],expenses[1]])
})

test("filter by startDate only",()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }

    const selector=getVisibleExpense(expenses,filters);
    expect(selector).toEqual([expenses[2],expenses[0]])

})


test("filter by endDate only",()=>{
const filters={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:moment(0)
}

const selector=getVisibleExpense(expenses,filters);
expect(selector).toEqual([expenses[0],expenses[1]])

})

test("filter by sortBy=date only",()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const selector=getVisibleExpense(expenses,filters);
    expect(selector).toEqual([expenses[2],expenses[0],expenses[1]])

})

test("filter by sortBy=amount only",()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }

    const selector=getVisibleExpense(expenses,filters);
    expect(selector).toEqual([expenses[1],expenses[2],expenses[0]])

})