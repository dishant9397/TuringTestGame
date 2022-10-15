import * as React from 'react';
import {Box, Button, Card, CardContent, Typography, CardActions} from "@material-ui/core";
import Logo from "../game-intro/resources/logo.svg";

const ORIGINAL_SENTENCE =
    "If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size " +
    "property. (This can itself be the keyword auto, which sizes the flex item based on its contents.)";
const HUMAN_TRANSLATION = "If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size " +
    "property. (This can itself be the keyword auto, which sizes the flex item based on its contents.)";
const STATY_TRANSLATION = "If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size " +
    "property. (This can itself be the keyword auto, which sizes the flex item based on its contents.)";
const NEURO_TRANSLATION = "If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size " +
    "property. (This can itself be the keyword auto, which sizes the flex item based on its contents.)";

function CardDisplay() {
    return (
        <Box sx={{width: '100%'}} className="box">
            {<img src={Logo} alt="background" className="background"/>}
            <div className="display-captionZone">
                <Typography className="display-caption">
                    Guess which translation is from human?
                </Typography>
            </div>
            <div className="display-questionZone">
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The original sentence:
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {ORIGINAL_SENTENCE}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/*TODO: write the mobile view for portability*/}
                            <Button style={{textTransform: 'none'}} className="display-cardButton">
                                {HUMAN_TRANSLATION}
                            </Button>
                            <Button style={{textTransform: 'none'}} className="display-cardButton">
                                {STATY_TRANSLATION}
                            </Button>
                            <Button style={{textTransform: 'none'}} className="display-cardButton">
                                {NEURO_TRANSLATION}
                            </Button>
                    </CardActions>
                </Card>
            </div>
        </Box>
    )
}

export default CardDisplay
