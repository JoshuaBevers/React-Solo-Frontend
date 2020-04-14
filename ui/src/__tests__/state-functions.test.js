import React, { useContext } from "react";
import ReactDOM from "react-dom";
import StateContext, { StateProvider } from "../context";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Player } from "../interfaces/player";

import Quests from "../components/quests";

let container = null;
const LoadedPlayer = new Player(1, "Joshua", 1, 1, 1, 1, 1, 1, 10, [
  "Default Running",
]);

const initialState = {
  player: LoadedPlayer,
};

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

test("Adds quest when clicked", () => {
  const onChange = jest.fn();
  //   const quests = initialState;
  act(() => {
    ReactDOM.render(
      <StateContext.Provider value={[LoadedPlayer]}>
        <Quests />
      </StateContext.Provider>,
      container
    );
  });

  const button = document.querySelector("[data-testid=toggle]");
  expect(button.innerHTML).toBe("RemoveQuest");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(1);
});
