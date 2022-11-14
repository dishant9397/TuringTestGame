/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Box, Button, Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Logo from "../game-intro/resources/logo.svg";
import StatyImage from "./resources/staty.png";
import NeuroImage from "./resources/neuro.png";
import HumanImage from "./resources/human.png";
import Translation from './Translation';

function DisplayCard(props) {

    const HUMAN = "HUMAN"
    const STATISTICAL = "STATISTICAL"
    const NEURO = "NEURO"

    const card = props?.card
    const {choice, setChoice} = props;
    const {score, setScore} = props
    const order = props?.order

    const trimScore = (score) => {
        return (Math.trunc(score * Math.pow(10, 4)) / Math.pow(10, 4))
    }

    const options = {
        score: score,
        choice: choice,
        setChoice: setChoice
    }

    const translations = [
        {
            type: HUMAN,
            translation: card.humanTranslation,
            score: trimScore(card.humanScore),
            image: HumanImage,
            isSelected: false
        },
        {
            type: STATISTICAL,
            translation: card.statisticalMachineTranslation,
            score: trimScore(card.statisticalMachineScore),
            image: StatyImage,
            isSelected: false
        },
        {
            type: NEURO,
            translation: card.neuralMachineTranslation,
            score: trimScore(card.neuralMachineScore),
            image: NeuroImage,
            isSelected: false
        }
    ]

    const calculateScore = () => {
        if (choice === HUMAN) {
            setScore(score => ({...score, player: score.player + 1}))
        }
        if (translations[0].score > translations[1].score && translations[0].score > translations[2].score) {
            setScore(score => ({...score, robot: score.robot + 1}))
        }
    }
    
    const onSubmit = () => {
        if (!score.enable) {
            calculateScore()
            setScore(score => ({...score, enable: true}))
        }
    }

    return (
        <Box sx={{ width: '100%' }} className="box">
            {<img src={Logo} alt="background" className="background" />}
            <div className="display-captionZone">
                <Typography className="display-caption">
                    Guess which translation is from human?
                </Typography>
            </div>
            <div className="display-questionZone">
                <Card style={{maxHeight: '70vh', overflow: 'auto'}}>
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
                        <Translation details={translations[order[0]]} options={options}/>
                        <Translation details={translations[order[1]]} options={options}/>
                        <Translation details={translations[order[2]]} options={options}/>
                        {choice !== "" && <Button className="submit-button" data-testid="submitBtn" onClick={onSubmit}>Submit</Button>}
                    </CardActions>
                </Card>
                <div style={{ display:'flex' }}>
                    {score.enable && <Typography variant="h6" className="score-typography" data-testid="playerScore" align="left">Player's Score: {score.player}</Typography>}
                    {score.enable && <Typography style={{width: '40%'}}></Typography>}
                    {score.enable && <Typography variant="h6" className="score-typography" data-testid="robotScore" align="right">Robot's Score: {score.robot}</Typography>}
                </div>
            </div>
        </Box>
    )
}

export default DisplayCard
