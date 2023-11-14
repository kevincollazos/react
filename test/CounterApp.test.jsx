import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp"
import { describe, test, expect } from "@jest/globals"

describe('CounterApp', () => { 
    const number = 43;

    test('should intial value 43', () => { 
        const {getByTestId} = render(<CounterApp number={number} />);
        expect(getByTestId('test-number-default').innerHTML).toBe(number.toString());
    });

    test('should plus +1 button', () => {
        render(<CounterApp number={number}/>);
        fireEvent.click(screen.getByTestId('sumale-kbron'));
        expect(screen.getByTestId('test-counter').innerHTML).toBe('44')
    });

    test('should rest -1 button', () => {
        render(<CounterApp number={number}/>);
        fireEvent.click(screen.getByTestId('restale-kbron'));
        expect(screen.getByTestId('test-counter').innerHTML).toBe('42')
    });

    test('should rest -1 button', () => {
        render(<CounterApp number={number}/>);
        fireEvent.click(screen.getByTestId('reseteame-kbron'));
        expect(screen.getByTestId('test-counter').innerHTML).toBe(number.toString())
    });
 });
