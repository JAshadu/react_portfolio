import { useState } from 'react';
import './Card.css';

function Card(props) {
    const [cardDisplay, setCardDisplay] = useState(true)

    const flipCard = () => {
        setCardDisplay(false)
    }

    const flipCardBack = () => {
        setCardDisplay(true)
    }

    return(
        <div className='card'>
            {cardDisplay && (<div onClick={flipCard} className="front-card">
                <h3>{props.front}</h3>
            </div>)}
            {!cardDisplay && (<div onClick={flipCardBack} className="back-card">
                <ul>
                    {props.back.map(item => <li>{item}</li>)}
                </ul>
            </div>)}
        </div>
    )
}

export default Card;
