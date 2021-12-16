import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";

import Timer from "./Timer";

describe("Timer", () => {
    let container: ShallowWrapper;

    beforeEach(() => (container = shallow(<Timer />)))

    it("contains a two divs with class name 'section'", () => {
        expect(container.find(".section").length).toEqual(2);
    });

    it("contains a Heading component", () => {
        expect(container.find("Heading").length).toEqual(1);
    });

    it("contains the Numbers component", () => {
        expect(container.find("Numbers").length).toEqual(1);
    });

    it("contains a Buttons component", () => {
        expect(container.find("Buttons").length).toEqual(1);
    });
});
