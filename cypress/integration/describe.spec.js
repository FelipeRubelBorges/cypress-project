/// <reference types="cypress" />

it("A external test....", () => {});

describe("Shold group test...", () => {
  describe("Shold group especific test...", () => {
    it("A internal test 1....", () => {});
  });

  describe("Shold group especific test...", () => {
    it("A internal test 2....", () => {});
  });

  it("A internal test....", () => {});
});