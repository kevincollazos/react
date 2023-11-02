import { render } from "@testing-library/react"
import App from "../src/App"
import { describe, test } from "@jest/globals"

describe('test App', () => { 
    test('should match snapshot', () => { 
        render(
            <App /> 
        )
     })
 })