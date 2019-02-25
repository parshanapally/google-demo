import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import App from "./App";

describe("Given App", () => {
  let store = {};
  let component;

  const localStorageMock = {
    getItem: key => {
      return store[key];
    },
    setItem: (key, currentTime) => {
      console.log(key);
      console.log(currentTime);

      return (store[key] = `${currentTime}`);
    },
    clear: () => {
      return (store = {});
    }
  };
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock
  });
  function requiredProps(overrides = {}) {
    return {
      localStorage: localStorageMock,
      ...overrides
    };
  }
  beforeEach(() => {
    component = renderComponent();
  });

  function renderComponent(props = requiredProps()) {
    return shallow(<App {...props} />);
  }

  it("should exist", () => {
    expect(component).to.exist();
  });
  it("should contain <div/>", () => {
    let div = component.find("div");
    expect(div).to.have.length(2);
  });

  it("should contain the default state", () => {
    expect(component.state().isSaved).to.be.false();
  });

  it("should call localStorage", () => {
    expect(localStorage).to.have.length(3);
    expect(localStorage).to.equal(localStorageMock);
  });
});
