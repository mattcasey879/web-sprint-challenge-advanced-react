import React from "react";
import {render, screen, waitFor } from '@testing-library/react';
import  userEvent  from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
    

});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);
    const firstNameInput = screen.getByLabelText(/first name:/i);
        userEvent.type(firstNameInput, "Matthew");
        
    const lastNameInput = screen.getByLabelText(/last name:/i)
        userEvent.type(lastNameInput, "Casey");
    const addressInput = screen.getByLabelText(/address:/i)
        userEvent.type(addressInput, "123 Main Street")

    const stateInput = screen.getByLabelText(/state:/i)
        userEvent.type(stateInput, "Louisiana")

    const zipInput = screen.getByLabelText(/zip:/i)
        userEvent.type(zipInput, "71355");
    
    const button = screen.getByRole("button")
        userEvent.click(button);
        const successMsg = screen.queryByText(/You have ordered some plants! Woo-hoo!/i)
        expect(successMsg).toBeInTheDocument();
    
    
});
