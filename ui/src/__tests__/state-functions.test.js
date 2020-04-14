import React from "react";
import ReactDOM from "react-dom";
import Profile from "../components/profile";
import { shallow } from "enzyme";

//test to make sure jest is set up correctly and working.
describe("Addition", () => {
  it("knows that 2 and 2 makes 4", () => {
    expect(2 + 2).toBe(4);
  });
});

//test to make sure Profile mounts

describe("app component", () => {
  it("tests for hello", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("p").text();
    expect(test.toEqual("hello"));
  });
});

// it("renders correctly react-test-renderer", () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<Profile />);
//   const result = renderer.getRenderOutput();
//   expect(result).toMatchSnapshot();
// });
