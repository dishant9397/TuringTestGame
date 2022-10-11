import * as React from 'react';
import {Typography, Button} from "@material-ui/core";
import {CardDTO} from '../../entity/card/CardDTO.js';
import { useForm } from 'react-hook-form';

function UploadFile(props) {

    const [isDisabled, setIsDisabled] = React.useState(true)
    const [cards, setCards] = React.useState([])
    const {handleNext} = props;

    const readFile = async (event) => {
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = async (file) => {
          const data: string[] = file.target.result.split('\n')
          const cards: CardDTO[] = []
          data.forEach(d => {
              const card: string[] = d.split('\t')
              const cardDto: CardDTO = {
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
              setIsDisabled(false)
              setCards(cards)
          }
        }
        reader.readAsText(event.target.files[0])
      }

    return (
        <div className="start-fileArea">
            <Typography className="start-reminder">Please select the file to upload (.tsv only)</Typography>
            <input type="file" accept=".tsv" onChange={(file) => readFile(file)}/>
            <div className="start-submit-button">
                <Button onClick={() => handleNext({cards: cards})} disabled={isDisabled}>Next</Button>
            </div>
        </div>
    )
}

export default UploadFile