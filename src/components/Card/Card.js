import './Card.css';
import { useState } from 'react';

function Card(props) {
    const [cardDisplay, setCardDisplay] = useState(true)
    
    return(
        <div className="card">
            <div className="front-card" style={{display: cardDisplay}}>
                <h3>{props.front}</h3>
            </div>
            <div className="back-card" style={{display: cardDisplay}}>
                <ul>
                    {props.back.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Card;
