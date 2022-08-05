import { cleanup, render, screen } from "@testing-library/react";
import UserAvatar from "../UserAvatar";

describe("Render the User Avatar", () => {
  afterEach(cleanup);
  const currentUser = { email: "test@email.com" };

  it("Render the user avatar component", () => {
    render(<UserAvatar currentUser={currentUser} />);

    expect(screen.getByTestId("user-avatar")).toBeInTheDocument();
  });
  it("should display the email of the logged in user", () => {
    render(<UserAvatar currentUser={currentUser} />);

    expect(screen.getByText("test@email.com")).toBeInTheDocument();
  });
});
