import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogoutButton from "../LogoutButton";

describe("Render log out button", () => {
  it("should display button element", () => {
    render(<LogoutButton />);

    const logoutButton = screen.getByRole("button");

    expect(logoutButton).toBeInTheDocument();
  });
  it("should say Logout on the button", () => {
    render(<LogoutButton />);

    const logoutButton = screen.getByRole("button");

    expect(logoutButton).toHaveTextContent(/Logout/);
  });
});

describe("Handle user interaction with Logout button", () => {
  it("should let user initiate log out process", () => {
    const logout = jest.fn();

    render(<LogoutButton logout={logout} />);

    const logoutButton = screen.getByRole("button");

    userEvent.click(logoutButton);

    expect(logout).toHaveBeenCalled();
  });
});
