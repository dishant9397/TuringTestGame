import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import DisplayCard from "../display-card/DisplayCard";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { LocationDisplay } from "../../App";
import userEvent from "@testing-library/user-event";

describe("Test card display section", () => {
  test("check caption renders", () => {
    render(
      <BrowserRouter>
        <DisplayCard />
      </BrowserRouter>
    );
    const caption = screen.getByText(
      /guess which translation is from human\?/i
    );
    expect(caption).toBeInTheDocument();
  });

  test("check original and reference sentences renders", () => {
    render(
      <BrowserRouter>
        <DisplayCard />
      </BrowserRouter>
    );
    const question = screen.getByTestId(/questionZone/i);
    expect(question).toBeInTheDocument();
  });

  test("check human translation Button renders", () => {
    render(
      <BrowserRouter>
        <DisplayCard />
      </BrowserRouter>
    );
    const question = screen.getByTestId(/humanButton/i);
    expect(question).toBeInTheDocument();
  });

  test("check staty translation Button renders", () => {
    render(
      <BrowserRouter>
        <DisplayCard />
      </BrowserRouter>
    );
    const question = screen.getByTestId(/statyButton/i);
    expect(question).toBeInTheDocument();
  });

  test("check neuro translation Button renders", () => {
    render(
      <BrowserRouter>
        <DisplayCard />
      </BrowserRouter>
    );
    const question = screen.getByTestId(/neuroButton/i);
    expect(question).toBeInTheDocument();
  });

  test("routes to CardDisplay components", () => {
    const route = "/game";

    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
  });

  test("check get scores Button renders", () => {
    render(
      <BrowserRouter>
        <DisplayCard />
      </BrowserRouter>
    );
    const getScoreBtn = screen.getByText(/get scores/i);
    expect(getScoreBtn).toBeInTheDocument();
  });

  test("check click get scores Button then score renders", () => {
    render(
      <BrowserRouter>
        <DisplayCard />
      </BrowserRouter>
    );
    const getScoreBtn = screen.getByText(/get scores/i);
    userEvent.click(getScoreBtn);
    const humanScore = screen.getByTestId(/humanScore/i);
    expect(humanScore).toBeInTheDocument();
    const statyScore = screen.getByTestId(/statyScore/i);
    expect(statyScore).toBeInTheDocument();
    const neuroScore = screen.getByTestId(/neuroScore/i);
    expect(neuroScore).toBeInTheDocument();
  });

});
