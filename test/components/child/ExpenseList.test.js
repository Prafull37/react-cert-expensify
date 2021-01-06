import React from "react"
import {shallow} from "enzyme";
import {ExpenseList} from "../../../src/components/child/ExpenseList";
import expenses from "../../fixtures/expense";

test("should render the ExpenseList with expenses",()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})

test("should render the ExpenseList with []",()=>{
    const wrapper=shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})