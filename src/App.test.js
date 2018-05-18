import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils"; // ES6

import App from "./App";

describe("App", () => {
  it("should be able to run a test", () => {
    expect(2 + 2 - 1).toEqual(3); //That's quick maths
  });
});
