import React from "react";
import {shallow} from "enzyme";
// import ReactShallowRenderer from 'react-test-renderer/shallow';

import NavigationLink from "../../src/router/NavigationLink";
import NavLink from 'react-router-dom';

test("test NavigationLink by snapshot",()=>{
  const wrapper=shallow(<NavigationLink/>);
  expect(wrapper).toMatchSnapshot()
})