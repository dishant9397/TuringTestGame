import * as React from 'react';
import { useNavigate } from "react-router-dom"
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import GameIntro from "./GameIntro";
import UploadFile from "./UploadFile";
import StartGame from "./StartGame";
import Logo from "./resources/logo.svg";

const steps = [
    'Upload File',
    'Game Intro',
    'Start Game'
]

const UPLOAD_FILE = 0;
const GAME_INTRO = 1;
const START_GAME = 2;

function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [cards, setCards] = React.useState([])
    const [sentences, setSentences] = React.useState(0)
    const [alignOptions, setAlignOptions] = React.useState({});
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
        if (props.alignOptions !== undefined) {
            setAlignOptions(props.alignOptions)
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
                        {activeStep === GAME_INTRO && <GameIntro></GameIntro>}
                        {activeStep === START_GAME && <StartGame cards={cards} sentences={sentences}></StartGame>}
                    </div>
                    <div className="start-buttonArea">
                        {activeStep !== UPLOAD_FILE &&
                        <div className="stepper-button left">
                            <Button data-testid="backBtn" className="apply-font" color="inherit" onClick={handleBack} sx={{ mr: 1 }} {...styleProps}>Back</Button>
                        </div>}
                        {activeStep === GAME_INTRO && 
                        <div className="stepper-button right">
                            <Button className="apply-font" data-testid="nextBtn" onClick={handleNext}>Next</Button>
                        </div>}
                        {activeStep === START_GAME && 
                        <div className="stepper-button right">
                            <Button data-testid="startBtn" className="apply-font" onClick={() => navigate('/game', { state: {cards: cards, sentences: sentences, alignOptions: alignOptions} })}>Start Game</Button>
                        </div>}

                    </div>
                </React.Fragment>
            )}
        </Box>
    )
}

export default HorizontalLinearStepper