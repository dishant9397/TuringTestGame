/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Box, Button, Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Logo from "../game-intro/resources/logo.svg";
import { useLocation } from 'react-router-dom';

const ORIGINAL_SENTENCE =
    "If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size " +
    "property. (This can itself be the keyword auto, which sizes the flex item based on its contents.)";
const REFERENCE_SENTENCE =
    "If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size " +
    "property. (This can itself be the keyword auto, which sizes the flex item based on its contents.)";
const HUMAN_TRANSLATION = "If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size " +
    "property. (This can itself be the keyword auto, which sizes the flex item based on its contents.)";
const HUMAN_SCORE = 0.9
const STATY_TRANSLATION = "If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size " +
    "property. (This can itself be the keyword auto, which sizes the flex item based on its contents.)";
const STATY_SCORE = 0.8
const NEURO_TRANSLATION = "If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size " +
    "property. (This can itself be the keyword auto, which sizes the flex item based on its contents.)";
const NEURO_SCORE = 0.7

function DisplayCard(props) {

    const location = useLocation()
    const cards = location.state.cards
    const sentences = location.state.sentences

    const [humanScore, setHumanScore] = React.useState(-1)
    const [statyScore, setStatyScore] = React.useState(-1)
    const [neuroScore, setNeuroScore] = React.useState(-1)

    React.useEffect(() => {
    }, [])

    const onClick = () => {
        setHumanScore(HUMAN_SCORE)
        setStatyScore(STATY_SCORE)
        setNeuroScore(NEURO_SCORE)
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
                            {ORIGINAL_SENTENCE}
                        </Typography>

                        <Typography gutterBottom variant="h6" component="div">
                            The reference sentence:
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {REFERENCE_SENTENCE}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/*TODO: write the mobile view for portability*/}
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none' }} className="display-cardButton1" data-testid="humanButton">
                                {HUMAN_TRANSLATION}
                            </Button>
                            {humanScore !== -1 && <Typography data-testid="humanScore">{humanScore}</Typography>}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none' }} className="display-cardButton2" data-testid="statyButton">
                                {STATY_TRANSLATION}
                            </Button>
                            {statyScore !== -1 && <Typography data-testid="statyScore">{statyScore}</Typography>}
                        </div>
                        <div style={{ display:'flex' }}>
                            <Button style={{ textTransform: 'none' }} className="display-cardButton3" data-testid="neuroButton">
                                {NEURO_TRANSLATION}
                            </Button>
                            {neuroScore !== -1 && <Typography data-testid="neuroScore">{neuroScore}</Typography>}
                        </div>
                        <Button onClick={onClick}>
                            Get Scores
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </Box>
    )
}

export default DisplayCard
