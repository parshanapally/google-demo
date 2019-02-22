import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import App from "./App";
import Chance from "chance";

describe("Given App", () => {
  let store = {};
  let component;
  let chance = new Chance();

  const localStorageMock = {
    getItem: key => {
      console.log(key);
      return store[key];
    },
    setItem: (key, currentTime) => {
      console.log(key);
      // value = chance.hour() 60 * 60 * 1000;
      currentTime.toString();
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

  it("should default state", () => {
    let component = renderComponent();
    expect(component.state().isSaved).to.be.false();
  });
  // it("should update isSaved to true when setItem is called", () => {
  //   expect(component.state().isSaved).to.be.false();
  //   localStorage.setItem();
  //   expect(component.state().isSaved).to.be.true();
  // });

  it("should call localStorage", () => {
    expect(localStorage).to.have.length(3);
    expect(localStorage).to.equal(localStorageMock);
  });
  it("should getItem()", () => {});
});
