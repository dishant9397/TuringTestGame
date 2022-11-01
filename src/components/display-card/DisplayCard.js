/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Box, Button, Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Logo from "../game-intro/resources/logo.svg";

function DisplayCard(props) {
    const HUMAN = "human";
    const STATY = "staty";
    const NEURO = "neuro";
    const card = props?.card


    const {choice, setChoice, humanScore, setHumanScore, neuroScore, setNeuroScore, statyScore, setStatyScore,
            humanIdentity, setHumanIdentity, statyIdentity, setStatyIdentity, neuroIdentity, setNeuroIdentity} = props;

    const onSubmit = () => {
        setHumanScore(card.humanScore)
        setStatyScore(card.statisticalMachineScore)
        setNeuroScore(card.neuralMachineScore)
        setHumanIdentity(true)
        setStatyIdentity(true)
        setNeuroIdentity(true)
    }

    const handleClick = (id) => {
        if (choice !== id) {
            setChoice(id);
        } else {
            setChoice("");
        }
    }

    const currentChoice1 = choice === HUMAN ? "display-cardButton1-clicked" : "display-cardButton1";
    const currentChoice2 = choice === STATY ? "display-cardButton2-clicked" : "display-cardButton2";
    const currentChoice3 = choice === NEURO ? "display-cardButton3-clicked" : "display-cardButton3";

    return (
        <Box sx={{ width: '100%' }} className="box">
            {<img src={Logo} alt="background" className="background" />}
            <div className="display-captionZone">
                <Typography className="display-caption">
                    Guess which translation is from human?
                </Typography>
            </div>
            <div className="display-questionZone">
                <Card>
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
                    <CardActions>
                        {/*TODO: write the mobile view for portability*/}
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none' }} className={currentChoice1} data-testid="humanButton" onClick={() => handleClick(HUMAN)}>
                                {card.humanTranslation}
                            </Button>
                            {humanScore !== -1 && <Typography data-testid="humanScore">{humanScore}</Typography>}
                            {humanIdentity && <Typography>{HUMAN}</Typography>}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none' }} className={currentChoice2} data-testid="statyButton" onClick={() => handleClick(STATY)}>
                                {card.statisticalMachineTranslation}
                            </Button>
                            {statyScore !== -1 && <Typography data-testid="statyScore">{statyScore}</Typography>}
                            {statyIdentity && <Typography>{STATY}</Typography>}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none' }} className={currentChoice3} data-testid="neuroButton" onClick={() => handleClick(NEURO)}>
                                {card.neuralMachineTranslation}
                            </Button>
                            {neuroScore !== -1 && <Typography data-testid="neuroScore">{neuroScore}</Typography>}
                            {neuroIdentity && <Typography>{NEURO}</Typography>}
                        </div>
                        <Button data-testid="submitBtn" onClick={onSubmit}>
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </Box>
    )
}

export default DisplayCard
