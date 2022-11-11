/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Box, Button, Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Logo from "../game-intro/resources/logo.svg";
import StatyImg from "./resources/staty.png";
import NeuroImg from "./resources/neuro.png";
import HumanImg from "./resources/human.png";

function DisplayCard(props) {

    const HUMAN = "human";
    const STATY = "staty";
    const NEURO = "neuro";
    const card = props?.card

    const trimScore = (score) => {
        return (Math.trunc(score * Math.pow(10, 4)) / Math.pow(10, 4))
    }

    const humanScore = trimScore(card.humanScore)
    const statyScore = trimScore(card.statisticalMachineScore)
    const neuroScore = trimScore(card.neuralMachineScore)

    const {choice, setChoice} = props;
    const {showScore, setShowScore} = props
    const {score, setScore} = props

    const calculateScore = () => {
        if (choice === HUMAN) {
            setScore(score => ({...score, player: score.player + 1}))
        }
        if (humanScore > statyScore && humanScore > neuroScore) {
            setScore(score => ({...score, robot: score.robot + 1}))
        }
    }
    
    const onSubmit = () => {
        if (!showScore) {
            calculateScore()
            console.log(score)
            setShowScore(true)
        }
    }

    const handleClick = (id) => {
        if (!showScore) {
            if (choice !== id) {
                setChoice(id);
            } else {
                setChoice("");
                setShowScore(false)
            }
        }
    }

    const currentChoice1 = choice === HUMAN ? "display-cardButton-clicked" : "display-cardButton";
    const currentChoice2 = choice === STATY ? "display-cardButton-clicked" : "display-cardButton";
    const currentChoice3 = choice === NEURO ? "display-cardButton-clicked" : "display-cardButton";

    return (
        <Box sx={{ width: '100%' }} className="box">
            {<img src={Logo} alt="background" className="background" />}
            <div className="display-captionZone">
                <Typography className="display-caption">
                    Guess which translation is from human?
                </Typography>
            </div>
            <div className="display-questionZone">
                <Card style={{maxHeight: '60vh', overflow: 'auto'}}>
                    <CardContent data-testid="questionZone">
                        <Typography gutterBottom variant="h5" component="div">
                            The original sentence:
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {card.original}
                        </Typography>

                        <Typography gutterBottom variant="h6" component="div">
                            The reference sentence:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.referenceTranslation}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ alignItems: 'flex-start', marginLeft: '4%' }}>
                        {/*TODO: write the mobile view for portability*/}
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none', justifyContent:'flex-start' }} className={currentChoice1} data-testid="humanButton" onClick={() => handleClick(HUMAN)}>
                                {card.humanTranslation}
                            </Button>
                            {showScore && <Typography data-testid="humanScore" className="score-class">{humanScore}</Typography>}
                            {showScore && <img src={HumanImg} data-testid="humanIdentityImg" alt={HUMAN} title={HUMAN} className="identityImg" />}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none', justifyContent:'flex-start' }} className={currentChoice2} data-testid="statyButton" onClick={() => handleClick(STATY)}>
                                {card.statisticalMachineTranslation}
                            </Button>
                            {showScore && <Typography data-testid="statyScore" className="score-class">{statyScore}</Typography>}
                            {showScore && <img src={StatyImg} data-testid="statyIdentityImg" alt={STATY} title={STATY} className="identityImg" />}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none', justifyContent:'flex-start' }} className={currentChoice3} data-testid="neuroButton" onClick={() => handleClick(NEURO)}>
                                {card.neuralMachineTranslation}
                            </Button>
                            {showScore && <Typography data-testid="neuroScore" className="score-class">{neuroScore}</Typography>}
                            {showScore && <img src={NeuroImg} data-testid="neuroIdentityImg" alt={NEURO} title={NEURO} className="identityImg" />}
                        </div>
                        {choice !== "" && <Button className="submit-button" data-testid="submitBtn" onClick={onSubmit}>Submit</Button>}
                    </CardActions>
                </Card>
                <div style={{ display:'flex' }}>
                    {showScore && <Typography variant="h6" className="score-typography" data-testid="playerScore" align="left">Player's Score: {score.player}</Typography>}
                    {showScore && <Typography style={{width: '40%'}}></Typography>}
                    {showScore && <Typography variant="h6" className="score-typography" data-testid="robotScore" align="right">Robot's Score: {score.robot}</Typography>}
                </div>
            </div>
        </Box>
    )
}

export default DisplayCard
