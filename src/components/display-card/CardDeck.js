/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Button } from "@material-ui/core";
import {useLocation, useNavigate} from 'react-router-dom';
import DisplayCard from './DisplayCard';
import csvHelper from "./helper/csv_helper";
import {CSVDownload} from "react-csv";


function CardDeck() {

    const location = useLocation()
    const cards = location.state.cards
    const navigate = useNavigate()

    const [currentCard, setCurrentCard] = React.useState([])
    const [cardLength, setCardLength] = React.useState(cards?.length)
    const [sentences, setSentences] = React.useState(location.state.sentences)
    const [alignOptions, setAlignOptions] = React.useState(location.state.alignOptions)
    const [choice, setChoice] = React.useState("");
    const [score, setScore] = React.useState({player: 0, robot: 0, enable: false})
    const [order, setOrder] = React.useState([0, 1, 2])
    const [csvRecord, setCsvRecord] = React.useState([])
    const [visitedRecords, setVisitedRecords] = React.useState([])

    React.useEffect(() => {
        changeCard()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const randomizeOrder = () => {
        for (let i = 0; i < order.length; i += 1) {
            const len = order.length - 1 - i
            const index = Math.floor(Math.random() * len)
            const temp = order[index]
            order[index] = order[len]
            order[len] = temp
        }
        setOrder(order)
    }

    const changeCard = () => {
        const random = Math.floor(Math.random() * (cardLength));
        setCurrentCard(cards[random])
        cards[random] = cards[cardLength - 1]
        cards[cardLength - 1] = currentCard
        setSentences(sentences - 1)
        setCardLength(cardLength - 1)
        setChoice("")
        setScore(score => ({...score, enable: false}))
        randomizeOrder()
    }

    // start a new game without saving log array
    const onStartNewGame = () => {
        navigate('/');
    }

    // write the log in the csv record
    const onSaveGame = () => {
        setCsvRecord(csvHelper(visitedRecords));
    }

    return (
        <div>
            <DisplayCard
                card={currentCard}
                alignOptions={alignOptions}
                choice={choice} setChoice={setChoice}
                score={score} setScore={setScore}
                order={order}
                setVisitedRecords={setVisitedRecords}
            />
            <div className="next-button-container">
                {sentences > 0 
                    ? (score.enable && <Button data-testid="nextBtn" className="apply-font" onClick={changeCard}>Next</Button>)
                    : (score.enable &&
                        <div className="end-game-container">
                            <Button data-testid="newGameBtn" className="apply-font" onClick={onStartNewGame}>Start New Game</Button>
                            <Button data-testid="saveGameBtn"  className=" apply-font" onClick={onSaveGame}>Save Game</Button>
                        </div>
                    )}
                {csvRecord.length !== 0 &&
                    <CSVDownload data={csvRecord} target="_blank" separator={"\t"}/>}
            </div>
        </div>
    )
}

export default CardDeck