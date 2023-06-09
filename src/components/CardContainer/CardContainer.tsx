import Phrase from "../../types/Phrase";
import Card from "../Card/Card";
import classes from './CardContainer.module.css'

interface CardContainerProps {
    phrases: Phrase[]
}

function CardContainer({ phrases }: CardContainerProps) {
    return (
        <div className={classes.cardContainer} data-testid="card-container">
            {phrases.map((phrase, index) => (
                <Card
                    key={index}
                    phrase={phrase}
                />
            ))}
        </div>
    );
}

export default CardContainer;