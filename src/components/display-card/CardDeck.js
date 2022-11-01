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
    const [cardLength, setCardLength] = React.useState(cards.length)
    const [sentences, setSentences] = React.useState(location.state.sentences)
    const [choice, setChoice] = React.useState("");
    const [humanScore, setHumanScore] = React.useState(-1);
    const [statyScore, setStatyScore] = React.useState(-1);
    const [neuroScore, setNeuroScore] = React.useState(-1);
    const [humanIdentity, setHumanIdentity] = React.useState(false);
    const [statyIdentity, setStatyIdentity] = React.useState(false);
    const [neuroIdentity, setNeuroIdentity] = React.useState(false);

    React.useEffect(() => {
        changeCard()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changeCard = () => {
        const random = Math.floor(Math.random() * (cardLength));
        setCurrentCard(cards[random])
        cards[random] = cards[cardLength - 1]
        cards[cardLength - 1] = currentCard
        setSentences(s => s = s - 1)
        setCardLength(length => length = length - 1)
        setChoice("")   // reset the state of the current choices.
        setHumanIdentity(false)
        setNeuroIdentity(false)
        setStatyIdentity(false)
        setHumanScore(-1)
        setStatyScore(-1)
        setNeuroScore(-1)
    }

    return (
        <div>
            <DisplayCard card={currentCard}
                         choice={choice}
                         setChoice={setChoice}
                         humanIdentity={humanIdentity}
                         setHumanIdentity={setHumanIdentity}
                         humanScore={humanScore}
                         setHumanScore={setHumanScore}
                         statyIdentity={statyIdentity}
                         setStatyIdentity={setStatyIdentity}
                         statyScore={statyScore}
                         setStatyScore={setStatyScore}
                         neuroIdentity={neuroIdentity}
                         setNeuroIdentity={setNeuroIdentity}
                         neuroScore={neuroScore}
                         setNeuroScore={setNeuroScore}
            />
            <div className="next-button-container">
                {sentences > 0 
                    ? (<Button onClick={changeCard} className="next-button">Next</Button>)
                    : (<Button className="next-button">End Game</Button>)}
            </div>
        </div>
    )
}

export default CardDeck
