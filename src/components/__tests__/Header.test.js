import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore'
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"


it("should load the button Header Componenet", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();



})
it("should load the button  Header Componenet", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: "Login" });

    expect(button).toBeInTheDocument();



})
it("should load the Cart (0) Header Componenet", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );
    const button = screen.getByText("Cart (0)");

    expect(button).toBeInTheDocument();



})
it("should load the Cart Header Componenet", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );
    const button = screen.getByText(/Cart/);

    expect(button).toBeInTheDocument();


})

it("should Load The Header Component With Clicking login button and changes to logOut", () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Guest User"});
    expect(logoutButton).toBeInTheDocument();

})