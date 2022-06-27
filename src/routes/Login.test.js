import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

describe("Render the login page with correct elements", () => {
  it("should have the main logo", () => {
    render(<Login />, { wrapper: MemoryRouter });

    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("should have a username and a password field", () => {
    render(<Login />, { wrapper: MemoryRouter });

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("should have a submit button", () => {
    render(<Login />, { wrapper: MemoryRouter });

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should have a Link to Sign Up page", () => {
    render(<Login />, { wrapper: MemoryRouter });

    const signupLink = screen.getByRole("link");

    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveTextContent(/sign up/i);
    expect(signupLink).toHaveAttribute("href", "/signup");
  });
});

describe("Handle user inputs in the form", () => {
  it.todo("captures user input for submission");
  it.todo("requires both email and password to be filled out");
  it.todo("submits the users inputs");
});
