import * as React from 'react';
import { TextField, Typography, Button, Checkbox } from "@material-ui/core";

function UploadFile(props) {

    const [cards, setCards] = React.useState([])
    const [sentences, setSentences] = React.useState(0);
    const [isOriginalChecked, setIsOriginalChecked] = React.useState(false)
    const [isReferenceChecked, setIsReferenceChecked] = React.useState(false)
    const { handleNext } = props;
    const [totalCards, setTotalCards] = React.useState(0)

    const readFile = async (event) => {
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = async (file) => {
            const data = file.target.result.split('\n')
            const cards = []
            data.forEach(d => {
                const card = d.split('\t')
                const cardDto = {
                    original: card[0],
                    referenceTranslation: card[1],
                    humanTranslation: card[2],
                    humanScore: card[3],
                    neuralMachineTranslation: card[4],
                    neuralMachineScore: card[5],
                    statisticalMachineTranslation: card[6],
                    statisticalMachineScore: card[7]
                }
                cards.push(cardDto)
            })
            if (cards.length > 0) {
                setCards(cards)
                setTotalCards(cards.length)
            }
        }
        reader.readAsText(event.target.files[0])
    }

    return (
        <div>
            <div className="start-fileArea">
                <div className="row">
                    <Typography component={'div'} className="start-reminder">Please select the file to upload (.tsv only)</Typography>
                    <input className="input" data-testid="fileDrop" type="file" accept=".tsv" onChange={(file) => readFile(file)} />
                </div>
                <div className="row">
                    <Typography className="start-reminder">
                        Should the original translation be right aligned?
                    </Typography>
                    <Checkbox checked={isOriginalChecked} onChange={() => setIsOriginalChecked(!isOriginalChecked)}/>
                </div>
                <div className="row">
                    <Typography className="start-reminder">
                        Should the reference translation be right aligned?
                    </Typography>
                    <Checkbox checked={isReferenceChecked} onChange={() => setIsReferenceChecked(!isReferenceChecked)}/>
                </div>
                <div className="row">
                    <Typography className="start-reminder">
                        Select the number of sentences in the gameplay
                    </Typography>
                    <TextField className="input" onChange={(event) => setSentences(event.target.value)} value={sentences} type="number" disabled={totalCards <= 0}/>
                </div>
                <br/>
                {
                    (sentences > totalCards || sentences < 0) &&
                    <div style={{ color: "red" }}>
                        The file that you uploaded contains only <span style={{fontWeight: "bold"}}>{totalCards}</span> sentences from which you are requesting {sentences} sentences which is an invalid entry.
                    </div>
                }
            </div>
            <div className="stepper-button right">
                <Button role={'nextButton'} onClick={() => handleNext({ 
                    cards: cards, sentences: sentences,
                    alignOptions: {
                        original: isOriginalChecked,
                        reference: isReferenceChecked
                    }
                    })} disabled={sentences <= 0 || sentences > totalCards}>Next</Button>
            </div>
        </div>
    )
}

export default UploadFile