import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

jest.mock("./Component/Home", () => () => <div>thinking made visual</div>);

test("renders the home page inside the router", async () => {
  window.scrollTo = jest.fn();

  render(
    <MemoryRouter
      initialEntries={["/"]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByText(/thinking made visual/i)).toBeInTheDocument();
});
