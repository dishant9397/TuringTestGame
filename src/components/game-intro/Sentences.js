import * as React from 'react';
import { TextField, Button, Typography } from "@material-ui/core";

function Sentences(props) {

    const [sentences, setSentences] = React.useState(0);
    const { handleNext } = props;
    const cards = props.cards;
    const totalCards = cards.length;

    React.useEffect(() => {
    }, [])

    return (
        <div className="start-fileArea">
            <Typography className="start-reminder">
                Select the number of sentences in the gameplay
            </Typography>
                <TextField onChange={(event) => setSentences(event.target.value)}
                    value={sentences} label={"Number of Sentences"} type="number" />
                <br />
                {sentences > totalCards &&
                    <div style={{ color: "red" }}>too large! please do not submit more than {totalCards} sentences</div>}
                {sentences < 0 &&
                    <div style={{ color: "red" }}>too small! please submit at least 1 sentence</div>}
                <div className="start-submit-button">
                    <Button role={'nextButton'} onClick={() => handleNext({ cards: cards, sentences: sentences })}
                        disabled={sentences <= 0 || sentences > totalCards}>Next</Button>
                </div>
        </div>
    )
}

export default Sentences