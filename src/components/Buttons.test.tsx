import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";

import Buttons from "./Buttons";

describe("Buttons", () => {
    let container: ShallowWrapper;

    beforeEach(() => (container = shallow(
        <Buttons
            startTimer={jest.fn()}
            stopTimer={jest.fn()}
            resetTimer={jest.fn()}
        />
    )))

    it("should render three inputs", () => {
        expect(container.find("input").length).toEqual(3);
    });
});
