import * as React from 'react';
import { TextField, Button, Typography } from "@material-ui/core";

function Sentences(props) {

    const [sentences, setSentences] = React.useState(0);
    const { handleNext } = props;
    const cards = props.cards;
    const totalCards = cards?.length;

    return (
        <div className="start-fileArea">
            <Typography className="start-reminder">
                Select the number of sentences in the gameplay
            </Typography>
                <TextField onChange={(event) => setSentences(event.target.value)}
                    value={sentences} label={"Number of Sentences"} type="number" />
                <br />
                {
                    ( sentences > totalCards || sentences < 0 ) &&
                    <div style={{ color: "red" }}>
                        The file that you uploaded previously contains only {totalCards} sentences from which you are requesting {sentences} sentences which is an invalid entry.
                    </div>
                }
                <div className="start-submit-button">
                    <Button role={'nextButton'} onClick={() => handleNext({ cards: cards, sentences: sentences })}
                        disabled={sentences <= 0 || sentences > totalCards}>Next</Button>
                </div>
        </div>
    )
}

export default Sentences