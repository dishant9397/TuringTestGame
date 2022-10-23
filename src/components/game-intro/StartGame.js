import * as React from 'react';
import Start from './resources/start.gif';

function StartGame(props) {
    const cards = props.cards
    const sentences = props.sentences

    React.useEffect(() => {
        console.log(cards)
        console.log(sentences)
    }, [])

    return (
        <div className="start-game">
            <img src={Start} alt="start" width='100%' />
        </div>
    )
}

export default StartGame