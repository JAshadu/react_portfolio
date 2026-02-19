import { useRef } from 'react';
import './Card.css';

function Card(props) {
    const frontCardRef = useRef();
    const backCardRef = useRef();

    const flipCard = () => {
        frontCardRef.current.style.display = 'none'
        backCardRef.current.style.display = 'flex'
    }

    const flipCardBack = () => {
        frontCardRef.current.style.display = 'flex'
        backCardRef.current.style.display = 'none'
    }

    return(
        <div className='card'>
            <div ref={frontCardRef} onClick={flipCard} className="front-card">
                <h3>{props.front}</h3>
            </div>
            <div ref={backCardRef} onClick={flipCardBack} className="back-card">
                <ul>
                    {props.back.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Card;
