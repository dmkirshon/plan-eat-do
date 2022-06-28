import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

describe("Render the login page with correct elements", () => {
  it("should have the main logo", () => {
    render(<Login />, { wrapper: MemoryRouter });

    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("should have a username and a password field", () => {
    render(<Login />, { wrapper: MemoryRouter });

    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it("should have a submit button", () => {
    render(<Login />, { wrapper: MemoryRouter });

    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeInTheDocument();
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
  afterEach(cleanup);

  it("requires both email and password to be filled out for login", () => {
    const submitLogin = jest.fn();
    render(<Login submitLogin={submitLogin} />, { wrapper: MemoryRouter });

    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button");

    userEvent.click(submitButton);

    expect(submitLogin).not.toHaveBeenCalled();

    userEvent.type(emailField, "test@email.com");
    userEvent.click(submitButton);

    expect(submitLogin).not.toHaveBeenCalled();

    userEvent.clear(emailField);
    userEvent.type(passwordField, "password");
    userEvent.click(submitButton);

    expect(submitLogin).not.toHaveBeenCalled();

    userEvent.type(emailField, "test@email.com");
    userEvent.click(submitButton);

    expect(submitLogin).toHaveBeenCalled();
  });

  it("should allow the user to submit their credentials", () => {
    const submitLogin = jest.fn();
    render(<Login submitLogin={submitLogin} />, { wrapper: MemoryRouter });

    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button");

    userEvent.type(emailField, "test@email.com");
    userEvent.type(passwordField, "password");
    userEvent.click(submitButton);

    expect(submitLogin).toHaveBeenCalledWith({
      email: "test@email.com",
      password: "password",
    });
  });
});
