import * as React from 'react';
import {
    Box,
    Button,
    Step,
    StepLabel,
    Stepper,
    Typography,
} from '@material-ui/core';
import GameIntro from './GameIntro';
import UploadFile from './UploadFile';
import Sentences from './Sentences';
import StartGame from './StartGame';

const steps = [
    'Game Intro',
    'Upload file',
    'Number of sentences',
    'Start Game',
];

const GAME_INTRO = 0;
const UPLOAD_FILE = 1;
const SENTENCES = 2;
const START_GAME = 3;

function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const handleNext = () => {
        let newSkipped = skipped;
        console.log(activeStep);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    // TODO: click start button then jump to page 2
    return (
        <Box sx={{ width: '100%' }} className="box">
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
                        {activeStep === GAME_INTRO && <GameIntro></GameIntro>}
                        {activeStep === UPLOAD_FILE && <UploadFile></UploadFile>}
                        {activeStep === SENTENCES && (
                            <Sentences handleNext={handleNext}></Sentences>
                        )}
                        {activeStep === START_GAME && <StartGame></StartGame>}

                        <div className="start-buttonArea">
                            <Box sx={{ pt: 2, mr: 1 }}>
                                {activeStep === GAME_INTRO && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}
                                {activeStep === UPLOAD_FILE && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}
                                {activeStep === START_GAME && <Button>Start</Button>}
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                            </Box>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </Box>
    );
}

export default HorizontalLinearStepper;
