/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import { render, screen } from "@testing-library/react";
import DisplayCard from "../display-card/DisplayCard";
import { BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createBrowserHistory } from "history";

describe("Test Display Card section", () => {
  const card = {
    original:
      "La Maison Blanche fait pression pour que des inspecteurs nucléaires soient envoyés dès que possible pour surveiller la fermeture par la Corée du Nord de ses réacteurs nucléaires",
    referenceTranslation:
      "White House Pushes for Nuclear Inspectors to Be Sent as Soon as Possible to Monitor North Korea's Closure of Its Nuclear Reactors",
    humanTranslation: "White House Urges Hastily Sending Nuclear Inspectors to Supervise North Korea's Nuclear Reactor Shutdown",
    humanScore: 0.91271,
    statisticalMachineTranslation: "White House is pushing for nuclear inspectors to be sent as soon as possible to monitor North Korea's closure of its nuclear reactors.",
    statisticalMachineScore: 0.957052,
    neuralMachineTranslation: "The White House pushed to nuclear inspectors be sent as soon as possible to oversee the closure of North Korea's nuclear reactors.",
    neuralMachineScore: 0.935441,
  };

  beforeEach(async () => {
    const history = createBrowserHistory();
    history.push("/game", card);
  });

  test("check caption renders", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card}/>
      </BrowserRouter>
    );
    const caption = screen.getByText(
      /guess which translation is from human\?/i
    );
    expect(caption).toBeInTheDocument();
  });

  test("check original and reference sentences renders", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card}/>
      </BrowserRouter>
    );
    const question = screen.getByTestId(/questionZone/i);
    expect(question).toBeInTheDocument();
  });

  test("check human translation Button renders", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card}/>
      </BrowserRouter>
    );
    const question = screen.getByTestId(/humanButton/i);
    expect(question).toBeInTheDocument();
  });

  test("check staty translation Button renders", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card}/>
      </BrowserRouter>
    );
    const question = screen.getByTestId(/statyButton/i);
    expect(question).toBeInTheDocument();
  });

  test("check neuro translation Button renders", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card}/>
      </BrowserRouter>
    );
    const question = screen.getByTestId(/neuroButton/i);
    expect(question).toBeInTheDocument();
  });



  test("check submit Button renders", () => {
    render(
      <BrowserRouter>
        <DisplayCard card={card}/>
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId(/submitBtn/i);
    expect(submitBtn).toBeInTheDocument();
  });

  test("check click get scores Button then score renders", () => {

    render(
      <BrowserRouter>
        <DisplayCard card={card}/>
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId(/submitBtn/i);
    userEvent.click(submitBtn);
    const humanScore = screen.getByTestId(/humanScore/i);
    expect(humanScore).toBeInTheDocument();
    const statyScore = screen.getByTestId(/statyScore/i);
    expect(statyScore).toBeInTheDocument();
    const neuroScore = screen.getByTestId(/neuroScore/i);
    expect(neuroScore).toBeInTheDocument();
  });
});
