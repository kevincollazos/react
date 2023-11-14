import { render } from "@testing-library/react"
import App from "../src/App"
import { describe, test, expect } from "@jest/globals"

describe('test App', () => { 
    test('should match snapshot', () => { 
        const content = 'vamos a morir';
        const {getByText, getByTestId} = render(<App content={content}/>);
        expect(getByText(content)).toBeTruthy(); 
        expect(getByTestId('data-id').innerHTML).toBe(content)
     })
 })