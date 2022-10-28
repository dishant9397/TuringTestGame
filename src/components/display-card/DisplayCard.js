/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Box, Button, Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Logo from "../game-intro/resources/logo.svg";
import { useLocation } from 'react-router-dom';

function DisplayCard(props) {

    const card = props?.card

    const [humanScore, setHumanScore] = React.useState(-1)
    const [statyScore, setStatyScore] = React.useState(-1)
    const [neuroScore, setNeuroScore] = React.useState(-1)

    const onClick = () => {
        setHumanScore(card.humanScore)
        setStatyScore(card.statisticalMachineScore)
        setNeuroScore(card.neuralMachineScore)
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
                            <Button style={{ textTransform: 'none' }} className="display-cardButton1" data-testid="humanButton">
                                {card.humanTranslation}
                            </Button>
                            {humanScore !== -1 && <Typography data-testid="humanScore">{humanScore}</Typography>}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none' }} className="display-cardButton2" data-testid="statyButton">
                                {card.statisticalMachineTranslation}
                            </Button>
                            {statyScore !== -1 && <Typography data-testid="statyScore">{statyScore}</Typography>}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none' }} className="display-cardButton3" data-testid="neuroButton">
                                {card.neuralMachineTranslation}
                            </Button>
                            {neuroScore !== -1 && <Typography data-testid="neuroScore">{neuroScore}</Typography>}
                        </div>
                        <Button onClick={onClick}>
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </Box>
    )
}

export default DisplayCard
