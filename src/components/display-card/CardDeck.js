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
    const [sentences, setSentences] = React.useState(location.state.sentences)

    React.useEffect(() => {
        changeCard()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changeCard = () => {
        const random = Math.floor(Math.random() * (cards.length));
        setCurrentCard(cards[random])
        const temp = cards[sentences - 1]
        cards[sentences - 1] = cards[random]
        cards[random] = temp
        setSentences(s => s = s - 1)
    }

    return (
        <div>
            <DisplayCard card={currentCard}/>
            <div className="next-button-container">
                {sentences > 0 
                    ? (<Button onClick={changeCard} className="next-button">Next</Button>)
                    : (<Button className="next-button">End Game</Button>)}
            </div>
        </div>
    )
}

export default CardDeck
