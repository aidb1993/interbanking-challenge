import Phrase from "../../types/Phrase";
import classes from './Card.module.css'

interface CardProps {
    phrase: Phrase
}


function Card({ phrase }: CardProps) {
    return (
        <div data-testid="card" className={classes.card} >
            {phrase.phrase}
        </div>
    );
}

export default Card;
