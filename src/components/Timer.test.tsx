import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";
import {fireEvent, screen} from "@testing-library/react";

import Timer from "./Timer";
import {render} from "@testing-library/react";
import Buttons from "./Buttons";

describe("Timer", () => {
    let container: ShallowWrapper;

    beforeEach(() => (container = shallow(<Timer/>)))

    it("contains the specified elements", () => {
        expect(container.find("Heading").length).toEqual(1);
        expect(container.find("Numbers").length).toEqual(1);
        expect(container.find("Buttons").length).toEqual(1);
        expect(container.find(".section").length).toEqual(2);
    });

    it('timer should not be running when the app loads', function () {
        render(<Timer/>);
        // @ts-ignore
        expect(screen.getByTitle('isRunning', {hidden: true})).not.toBeChecked();
    });

    it('Clicking on start button should start the timer', function () {
        render(<Timer/>);
        const button = screen.getByRole('button', {name: /start/i})
        fireEvent.click(button);
        // @ts-ignore
        expect(screen.getByTitle('isRunning', {hidden: true})).toBeChecked();
    });

    it('Clicking on pause button should stop/pause the timer', function () {
        render(<Timer/>);
        const button = screen.getByRole('button', {name: /pause/i})
        fireEvent.click(button);
        // @ts-ignore
        expect(screen.getByTitle('isRunning', {hidden: true})).not.toBeChecked();
    });

    it('Clicking on reset button should stop/pause the timer', function () {
        render(<Timer/>);
        const button = screen.getByRole('button', {name: /reset/i})
        fireEvent.click(button);
        // @ts-ignore
        expect(screen.getByTitle('isRunning', {hidden: true})).not.toBeChecked();
    });

    it('the timer value should be zero when app loads', function () {
        render(<Timer/>);
        let seconds = screen.getByTitle('seconds');
        expect(seconds).toHaveTextContent(/00/i)
    });

    it('the timer value should NOT be zero when timer starts', function () {
        render(<Timer/>);
        jest.useFakeTimers();
        const button = screen.getByRole('button', {name: /start/i})
        fireEvent.click(button);
        let seconds = screen.getByTitle('seconds');
        jest.advanceTimersByTime(1000);
        expect(seconds).toHaveTextContent(/01/i)
    });
});
