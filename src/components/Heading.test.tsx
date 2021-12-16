import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";

import Heading from "./Heading";

describe("Heading", () => {
    let container: ShallowWrapper;

    beforeEach(() => (container = shallow(<Heading />)))

    it("should render an h2 tag with text 'Timer App' inside '.form' div", () => {
        expect(container.find("h2").text()).toEqual("Timer App");
    });
});
