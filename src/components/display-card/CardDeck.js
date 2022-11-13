/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Box, Button, Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Logo from "../game-intro/resources/logo.svg";
import { useLocation } from 'react-router-dom';
import DisplayCard from './DisplayCard';

function CardDeck() {

    const location = useLocation()
    const cards = location.state.cards
    
    const [currentCard, setCurrentCard] = React.useState([])
    const [cardLength, setCardLength] = React.useState(cards?.length)
    const [sentences, setSentences] = React.useState(location.state.sentences)
    const [choice, setChoice] = React.useState("");
    const [score, setScore] = React.useState({player: 0, robot: 0, enable: false})
    const [order, setOrder] = React.useState([0, 1, 2])

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

    return (
        <div>
            <DisplayCard card={currentCard} choice={choice} setChoice={setChoice} score={score} setScore={setScore} order={order}/>
            <div className="next-button-container">
                {sentences > 0 
                    ? (score.enable && <Button onClick={changeCard}>Next</Button>)
                    : (score.enable &&
                        <div className="end-game-container">
                            <Button data-testid="newGameBtn" style={{textAlign:"left", display:"block"}}>Start New Game</Button>
                            <Button data-testid="saveGameBtn" style={{textAlign:"right", display:"block"}}>Save Game</Button>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default CardDeck