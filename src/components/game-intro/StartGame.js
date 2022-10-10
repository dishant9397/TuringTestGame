import * as React from 'react';
import Start from './resources/start.gif';

function startGame() {
    return (
        <div className="start-game">
            <img src={Start} alt="start" width='100%'/>
        </div>
    )
}

export default startGame