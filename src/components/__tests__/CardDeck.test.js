/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LocationDisplay } from "../../App";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import CardDeck from "../display-card/CardDeck";
import * as routeData from "react-router";

const card = {
  original:
    "La Maison Blanche fait pression pour que des inspecteurs nucléaires soient envoyés dès que possible pour surveiller la fermeture par la Corée du Nord de ses réacteurs nucléaires",
  referenceTranslation:
    "White House Pushes for Nuclear Inspectors to Be Sent as Soon as Possible to Monitor North Korea's Closure of Its Nuclear Reactors",
  humanTranslation:
    "White House Urges Hastily Sending Nuclear Inspectors to Supervise North Korea's Nuclear Reactor Shutdown",
  humanScore: 0.91271,
  statisticalMachineTranslation:
    "White House is pushing for nuclear inspectors to be sent as soon as possible to monitor North Korea's closure of its nuclear reactors.",
  statisticalMachineScore: 0.957052,
  neuralMachineTranslation:
    "The White House pushed to nuclear inspectors be sent as soon as possible to oversee the closure of North Korea's nuclear reactors.",
  neuralMachineScore: 0.935441,
};
const cards = [card, card, card];
const mockLocation = {
  pathname: "/game",
  hash: "",
  search: "",
  state: { cards: cards },
};
const order = [0, 1, 2];
const sentence = 0;
const sentences = 3;
const score = { player: 0, robot: 0, enable: true };

describe("Test CardDeck section", () => {
  beforeEach(() => {
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("routes to Card Deck components", () => {
    const route = "/game";

    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
  });

  test("check new game Button renders when no sentences left and score displayed", async () => {
    const history = createMemoryHistory();

    history.push("/game");
    render(
      <MemoryRouter
        cards={cards}
        initialEntries={[
          { pathname: "/game", search: "Start New Game", cards: { cards } },
        ]}
      >
        <CardDeck cards={cards} sentences={sentence} score={score} />
      </MemoryRouter>
    );
    const selectButton = screen.getAllByTestId(/selectBtn/i)[0];
    userEvent.click(selectButton);
    const submitBtn = screen.getByTestId(/submitBtn/i);
    userEvent.click(submitBtn);
    const newGameBtn = screen.getByTestId(/newGameBtn/i);
    expect(newGameBtn).toBeInTheDocument();
  });

  test("check save game Button renders when no sentences left and score displayed", async () => {
    const route = "/game";

    render(
      <MemoryRouter initialEntries={[route]} cards={cards}>
        <CardDeck
          card={card}
          cards={cards}
          sentences={sentence}
          score={score}
        />
      </MemoryRouter>
    );
    const selectButton = screen.getAllByTestId(/selectBtn/i)[0];
    userEvent.click(selectButton);
    const submitBtn = screen.getByTestId(/submitBtn/i);
    userEvent.click(submitBtn);
    const saveGameBtn = screen.getByTestId(/saveGameBtn/i);
    expect(saveGameBtn).toBeInTheDocument();
  });
});
