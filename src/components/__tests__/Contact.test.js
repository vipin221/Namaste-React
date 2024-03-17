import { render,screen } from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'

describe("test Cases For Contact page", () =>{

    test("To Check Weather Heading Is Loaded Into The DOM", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        //  Assertion 
        expect(heading).toBeInTheDocument();
    })
    test("To Check Weather BUtton Is Loaded Into The DOM", () => {
        render(<Contact />);

        const button = screen.getByRole("button");

        //  Assertion 
        expect(button).toBeInTheDocument();
    })
    test("Should show The Label Name", () => {
        render(<Contact />);

        const name = screen.getByText("Name");

        //  Assertion 
        expect(name).toBeInTheDocument();
    });
    test("To Check weather All The Input Box is Loaded or Not in Contact  Page", () => {
         render(<Contact />);

        const InputBoxes = screen.getAllByRole("textbox");


        expect(InputBoxes.length).toBe(3);
    })

})


