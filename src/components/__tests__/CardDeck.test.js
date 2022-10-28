/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LocationDisplay } from "../../App";
import { createBrowserHistory } from "history";

describe("Test CardDeck section", () => {

  let card = {
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


  beforeEach( () => {
    const history = createBrowserHistory();
    history.push("/game", cards);
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
});
