import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { NavLink } from "./nav-link";

describe("NavLink", () => {
  it("should highlight the nav link relative to the current page when the user is in it", () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    expect(wrapper.getByText("About").dataset.current).toEqual("true");
    expect(wrapper.getByText("Home").dataset.current).toEqual("false");
  });
});
