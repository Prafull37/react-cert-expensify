import {SET_TEXT_FILTER,SORT_BY_AMOUNT,SORT_BY_DATE,SET_START_DATE,SET_END_DATE} from '../../../src//redux/actions/filterActionConstant'
import {setTextFilter,setEndDate,setStartDate,sortByDate,sortByAmount} from "../../../src/redux/actionCreators/filterAction";
import moment from "moment";

test("should set startDate action object",()=>{
    const action= setStartDate(moment(0));
    expect(action).toEqual({
        type:SET_START_DATE,
        startDate:moment(0)
    })
})

test("should set startDate as undefined on default call object",()=>{
    const action= setStartDate();
    expect(action).toEqual({
        type:SET_START_DATE,
        startDate:undefined
    })
})

test("should set endDate action object",()=>{
    const action= setEndDate(moment(0));
    expect(action).toEqual({
        type:SET_END_DATE,
        endDate:moment(0)
    })
})

test("should set endDate as undefined on default call object",()=>{
    const action= setEndDate();
    expect(action).toEqual({
        type:SET_END_DATE,
        endDate:undefined
    })
})

test("should test setTextFilter on passing value",()=>{
    const data={
        type:SET_TEXT_FILTER,
        text:"rent"
    }
    const action=setTextFilter(data.text);
    expect(action).toEqual(data)
})

test("should test setTextFilter with default value",()=>{
    const data={
        type:SET_TEXT_FILTER,
        text:""
    }
    const action=setTextFilter();
    expect(action).toEqual(data)
})

test("should be  sortByAmount be called",()=>{
    const data={
        type:SORT_BY_AMOUNT,
    }

    const action = sortByAmount();
    expect(action).toEqual(data)
})

test("should be  sortByDate be called",()=>{
    const data={
        type:SORT_BY_DATE,
    }

    const action = sortByDate();
    expect(action).toEqual(data)
})