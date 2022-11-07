/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import { render, screen,fireEvent } from "@testing-library/react";
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
  const choice="human";
  let showScore=false;
  const setChoice = jest.fn();
  const setShowScore=jest.fn(showScore=true);
  let score={player: 0, robot:0};

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
    const humanButton = screen.getByTestId(/humanButton/i);
    expect(humanButton).toBeInTheDocument();
  });

  test("check clicking human Button marks selection", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card} choice={choice} setChoice={setChoice} setShowScore={setShowScore} />
      </BrowserRouter>
    );

    const humanButton = screen.getByTestId(/humanButton/i);
    fireEvent.click(humanButton);
    expect(humanButton).toHaveStyle('background: rgba(63, 127, 191)');
  });

  test("check staty translation Button renders", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card}/>
      </BrowserRouter>
    );
    const statyButton = screen.getByTestId(/statyButton/i);
    expect(statyButton).toBeInTheDocument();
  });

  test("check clicking staty translation Button marks selection", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card} choice={choice} setChoice={setChoice}/>
      </BrowserRouter>
    );
    const statyButton = screen.getByTestId(/statyButton/i);
    fireEvent.click(statyButton);
    expect(statyButton).toHaveStyle('background: rgba(51, 51, 153)');
  });

  test("check neuro translation Button renders", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card}/>
      </BrowserRouter>
    );
    const neuroButton = screen.getByTestId(/neuroButton/i);
    expect(neuroButton).toBeInTheDocument();
  });

  test("check clicking neuro translation Button marks selection", () => {
    render(
      <BrowserRouter history={history}>
        <DisplayCard card={card} choice={choice} setChoice={setChoice}/>
      </BrowserRouter>
    );
    const neuroButton = screen.getByTestId(/neuroButton/i);
    fireEvent.click(neuroButton);
    expect(neuroButton).toHaveStyle('background: rgba(51, 153, 153)');
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

  test("check click submit Button then score renders", () => {
    render(
      <BrowserRouter >
        <DisplayCard card={card} showScore={showScore}  setShowScore={setShowScore} score={score}/>
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

  test("check click submit Button then identity images render", () => {

    render(
      <BrowserRouter >
        <DisplayCard card={card} showScore={showScore} setShowScore={setShowScore} score={score}/>
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId(/submitBtn/i);
    userEvent.click(submitBtn);
    const humanIdentity = screen.getByTestId(/humanIdentityImg/i);
    expect(humanIdentity).toBeInTheDocument();
    const statyIdentity = screen.getByTestId(/statyIdentityImg/i);
    expect(statyIdentity).toBeInTheDocument();
    const neuroIdentity = screen.getByTestId(/neuroIdentityImg/i);
    expect(neuroIdentity).toBeInTheDocument();
  });

  test("check click submit Button then player score renders", () => {

    render(
      <BrowserRouter >
        <DisplayCard card={card} showScore={showScore} setShowScore={setShowScore} score={score}/>
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId(/submitBtn/i);
    userEvent.click(submitBtn);
    const playerScore = screen.getByTestId('playerScore');
    expect(playerScore).toBeInTheDocument();
  });

  test("check click submit Button then robot score renders", () => {

    render(
      <BrowserRouter >
        <DisplayCard card={card} showScore={showScore} setShowScore={setShowScore} score={score}/>
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId(/submitBtn/i);
    userEvent.click(submitBtn);
    const robotScore = screen.getByTestId('robotScore');
    expect(robotScore).toBeInTheDocument();
  });
});
