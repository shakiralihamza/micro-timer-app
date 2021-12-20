import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";

import App from './App';

describe("App", () => {
    let container: ShallowWrapper;

    beforeEach(() => (container = shallow(<App />)))

    it("should render specified components", () => {
        expect(container.find("section").find(".color").length).toEqual(3);
        expect(container.find("section").find(".box").length).toEqual(1);
        expect(container.find(".box").find(".square").length).toEqual(5);
        expect(container.find(".box").find(".container").length).toEqual(1);
        expect(container.find(".container").find("Timer").length).toEqual(1);
        expect(container.find("section").length).toEqual(1);
    });
});
