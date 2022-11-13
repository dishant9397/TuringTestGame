/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import { render, screen, fireEvent } from "@testing-library/react";
import Translation from "../display-card/Translation";
import { BrowserRouter } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import HumanImage from "../display-card/resources/human.png";

describe("Test Translation section", () => {
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

  let choice = "human";
  let score = { player: 0, robot: 0, enable: true };
  const setChoice = jest.fn();
  const options = {
    score: score,
    choice: choice,
    setChoice: setChoice,
  };
  const details = {
    type: type,
    isSelected: true,
    translation: card.statisticalMachineTranslation,
    image: HumanImage,
  };

  test("check translation Button renders", () => {
    render(
      <BrowserRouter>
        <Translation choice={choice} score={score} options={options} setChoice={setChoice} details={details}/>
      </BrowserRouter>
    );
    const selectBtn = screen.getByTestId(/selectBtn/i);
    expect(selectBtn).toBeInTheDocument();
  });

  test("check clicking translation Button marks selection", () => {
    render(
      <BrowserRouter>
        <Translation choice={choice} score={score} options={options} setChoice={setChoice} details={details}/>
      </BrowserRouter>
    );
    const selectButton = screen.getAllByTestId(/selectBtn/i)[0];
    fireEvent.click(selectButton);
    expect(selectButton).toHaveStyle("background: rgba(51, 153, 153)");
  });

  test("check click identity images render", () => {
    render(
      <BrowserRouter >
        <Translation choice={choice} score={score} options={options} setChoice={setChoice} details={details}/>
      </BrowserRouter>
    );
    const identityImg = screen.getByTestId(/identityImg/i);
    expect(identityImg).toBeInTheDocument();
  });

  test("check click identity score render", () => {
    render(
      <BrowserRouter >
        <Translation choice={choice} score={score} options={options} setChoice={setChoice} details={details}/>
      </BrowserRouter>
    );
    const translationScore = screen.getByTestId(/score/i);
    expect(translationScore).toBeInTheDocument();
  });
});
