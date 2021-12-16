import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";

import App from './App';

describe("App", () => {
    let container: ShallowWrapper;

    beforeEach(() => (container = shallow(<App />)))

    it("should render a section", () => {
        expect(container.find("section").length).toEqual(1);
    });

    it("should render three divs with class name 'color' inside section", () => {
        expect(container.find("section").find(".color").length).toEqual(3);
    });

    it("should render a div with class name 'box'", () => {
        expect(container.find("section").find(".box").length).toEqual(1);
    });

    it("should render five divs with class name 'square'", () => {
        expect(container.find(".box").find(".square").length).toEqual(5);
    });

    it("should render a div with class name 'container'", () => {
        expect(container.find(".box").find(".container").length).toEqual(1);
    });

    it("should render <Timer /> Component", () => {
        expect(container.find(".container").find("Timer").length).toEqual(1);
    });
});
