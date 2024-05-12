import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockRestaurantList.json'
 
import { act } from "react-dom/test-utils"

global.fetch = jest.fn( () =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);

    }

    })
    
})

it("should Load the Body Component With Search Functionality", ()=>{

    async () =>{
        await act(async () => render(<Body />))
    }
    
    const searchBtn = screen.getByTestId("searchbtn");

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "burger"}});

    fireEvent.click(searchBtn);
    
    const cardAfterSearch = screen.getAllByTestId("resCard");

    expect(cardAfterSearch.length).toBe(1);


})