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

    const [humanScore, setHumanScore] = React.useState(-1)
    const [statyScore, setStatyScore] = React.useState(-1)
    const [neuroScore, setNeuroScore] = React.useState(-1)
    const [humanIdentity, setHumanIdentity] = React.useState(false)
    const [statyIdentity, setStatyIdentity] = React.useState(false)
    const [neuroIdentity, setNeuroIdentity] = React.useState(false)
    const {choice, setChoice} = props;

    const trimScore = (score) => {
        return (Math.trunc(score * Math.pow(10, 4)) / Math.pow(10, 4))
    }
    
    const onSubmit = () => {
        setHumanScore(trimScore(card.humanScore))
        setStatyScore(trimScore(card.statisticalMachineScore))
        setNeuroScore(trimScore(card.neuralMachineScore))
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
                    <CardActions style={{ alignItems: 'flex-start', marginLeft: '4%' }}>
                        {/*TODO: write the mobile view for portability*/}
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none', justifyContent:'flex-start' }} className={currentChoice1} data-testid="humanButton" onClick={() => handleClick(HUMAN)}>
                                {card.humanTranslation}
                            </Button>
                            {humanScore !== -1 && <Typography data-testid="humanScore">{humanScore}</Typography>}
                            {humanIdentity && <img src={HumanImg} data-testid="humanIdentityImg" alt={HUMAN} title={HUMAN} className="identityImg" />}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none', justifyContent:'flex-start' }} className={currentChoice2} data-testid="statyButton" onClick={() => handleClick(STATY)}>
                                {card.statisticalMachineTranslation}
                            </Button>
                            {statyScore !== -1 && <Typography data-testid="statyScore">{statyScore}</Typography>}
                            {statyIdentity && <img src={StatyImg} data-testid="statyIdentityImg" alt={STATY} title={STATY} className="identityImg" />}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none', justifyContent:'flex-start' }} className={currentChoice3} data-testid="neuroButton" onClick={() => handleClick(NEURO)}>
                                {card.neuralMachineTranslation}
                            </Button>
                            {neuroScore !== -1 && <Typography data-testid="neuroScore">{neuroScore}</Typography>}
                            {neuroIdentity && <img src={NeuroImg} data-testid="neuroIdentityImg" alt={NEURO} title={NEURO} className="identityImg" />}
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
