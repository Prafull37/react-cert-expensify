import React from "react"
import {shallow} from "enzyme";
import ExpenseDashboard from "../../src/components/ExpenseDashboard";

test('should render ExpenseDashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot();
  });