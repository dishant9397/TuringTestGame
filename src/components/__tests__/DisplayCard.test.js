/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import { render, screen} from "@testing-library/react";
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
    humanTranslation: "White House Urges Hastily Sending Nuclear Inspectors to Supervise North Korea's Nuclear Reactor Shutdown.",
    humanScore: 0.91271,
    statisticalMachineTranslation: "White House is pushing for nuclear inspectors to be sent as soon as possible to monitor North Korea's closure of its nuclear reactors.",
    statisticalMachineScore: 0.957052,
    neuralMachineTranslation: "The White House pushed to nuclear inspectors be sent as soon as possible to oversee the closure of North Korea's nuclear reactors.",
    neuralMachineScore: 0.935441,
  };
  const order=[0, 1, 2];
  const score={player: 0, robot: 0, enable: true};
  let alignOptions = {original:true, reference:true};

  beforeEach(async () => {
    const history = createBrowserHistory();
    history.push("/game", card);
  });

  test("check caption renders", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card} order={order} score={score} alignOptions={alignOptions}/>
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
        <DisplayCard card={card} order={order} score={score} alignOptions={alignOptions}/>
      </BrowserRouter>
    );
    const question = screen.getByTestId(/questionZone/i);
    expect(question).toBeInTheDocument();
  });

  test("check translations render", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card} order={order} score={score} alignOptions={alignOptions}/>
      </BrowserRouter>
    );
    const firstTranslation = screen.getByRole('button', {
      name: /White House Urges Hastily Sending Nuclear Inspectors to Supervise North Korea's Nuclear Reactor Shutdown\./i
    })
    expect(firstTranslation).toBeInTheDocument();

    const secondTranslation = screen.getByRole('button', {
      name: /White House is pushing for nuclear inspectors to be sent as soon as possible to monitor North Korea's closure of its nuclear reactors\./i
    })
    expect(secondTranslation).toBeInTheDocument();

    const thirdTranslation = screen.getByRole('button', {
      name: /The White House pushed to nuclear inspectors be sent as soon as possible to oversee the closure of North Korea's nuclear reactors\./i
    })
    expect(thirdTranslation).toBeInTheDocument();
  });

  test("check submit Button renders", () => {
    render(
      <BrowserRouter>
        <DisplayCard card={card} order={order} score={score} alignOptions={alignOptions}/>
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId(/submitBtn/i);
    expect(submitBtn).toBeInTheDocument();
  });

  test("check click submit Button then playerScore renders", () => {
    render(
      <BrowserRouter >
        <DisplayCard card={card} order={order} score={score} alignOptions={alignOptions}/>
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId(/submitBtn/i);
    userEvent.click(submitBtn);
    const playerScore = screen.getByTestId(/playerScore/i);
    expect(playerScore).toBeInTheDocument();
  });

  test("check click submit Button then robotScore renders", () => {
    render(
      <BrowserRouter >
        <DisplayCard card={card} order={order} score={score} alignOptions={alignOptions}/>
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId(/submitBtn/i);
    userEvent.click(submitBtn);
    const robotScore = screen.getByTestId(/robotScore/i);
    expect(robotScore).toBeInTheDocument();
  });
});
