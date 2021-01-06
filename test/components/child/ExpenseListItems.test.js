import React from "react"
import {shallow} from "enzyme";
import ExpenseListItems from "../../../src/components/child/ExpenseListItems";
import expenses from "../../fixtures/expense";

test("should render it ",()=>{
    const wrapper=shallow(<ExpenseListItems {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot()
})