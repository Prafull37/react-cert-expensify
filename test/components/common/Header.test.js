import React from "react";
import {shallow} from "enzyme";
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from "../../../src/components/common/Header";
import NavigationLink from "../../../src/router/NavigationLink"

test("test NavigationLink by snapshot",()=>{
   const wrapper=shallow(<Header/>)
   expect(wrapper).toMatchSnapshot();
})