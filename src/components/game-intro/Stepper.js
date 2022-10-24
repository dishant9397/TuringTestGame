import * as React from 'react';
import { useNavigate } from "react-router-dom"
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import GameIntro from "./GameIntro";
import UploadFile from "./UploadFile";
import Sentences from "./Sentences";
import StartGame from "./StartGame";
import Logo from "./resources/logo.svg";

const steps = [
    'Upload File',
    'Number of Sentences',
    'Game Intro',
    'Start Game'
]

const UPLOAD_FILE = 0;
const SENTENCES = 1;
const GAME_INTRO = 2;
const START_GAME = 3;

function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [cards, setCards] = React.useState([])
    const [sentences, setSentences] = React.useState(0)
    const navigate = useNavigate();

    const styleProps = activeStep === 0 && {
        style: { visibility: 'hidden' }
    }

    const handleNext = (props) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (props.cards !== undefined) {
            setCards(props.cards)
        }
        if (props.sentences !== undefined) {
            setSentences(props.sentences)
        }
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleReset = () => {
        setActiveStep(0);
    }

    // TODO: click start button then jump to page 2
    return (
        <Box sx={{ width: '100%' }} className="box">
            {activeStep !== START_GAME && <img src={Logo} alt="background" className="background" />}
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div className="start-content">
                        {activeStep === UPLOAD_FILE && <UploadFile handleNext={handleNext}></UploadFile>}
                        {activeStep === SENTENCES && <Sentences handleNext={handleNext} cards={cards}></Sentences>}
                        {activeStep === GAME_INTRO && <GameIntro></GameIntro>}
                        {activeStep === START_GAME && <StartGame cards={cards} sentences={sentences}></StartGame>}

                    </div>
                    <div className="start-buttonArea">
                        <Button data-testid="backBtn"
                            color="inherit"
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                            {...styleProps}
                        >
                            Back
                        </Button>
                        {activeStep === GAME_INTRO && <Button
                            data-testid="nextBtn" onClick={handleNext}>Next</Button>}
                        {activeStep === START_GAME && <Button data-testid="startBtn" onClick={() => navigate('/game', { state: {cards: cards, sentences: sentences} })}>Start Game</Button>}

                    </div>
                </React.Fragment>
            )}
        </Box>
    )
}

export default HorizontalLinearStepper