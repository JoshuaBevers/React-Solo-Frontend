import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Quests from "../components/quests";

//test to make sure jest is set up correctly and working.

// describe("Addition", () => {
//   it("knows that 2 and 2 makes 4", () => {
//     expect(2 + 2).toBe(4);
//   });
// });

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Adds quest when clicked", () => {
  const onChange = jest.fn();
  act(() => {
    render(<Quests />, container);
  });

  const button = document.querySelector("[data-testid=accept]");
  expect(button.innerHTML).toBe("Accept the Quest");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(1);
});
