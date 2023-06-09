import React, { useState } from 'react';
import Phrase from '../../types/Phrase';
import classes from './PhraseInput.module.css';
import Button from '../Common/Button/Button';

interface PhraseInputProps {
    setPhrases: React.Dispatch<React.SetStateAction<Phrase[]>>;
}

const PhraseInput: React.FC<PhraseInputProps> = ({ setPhrases }) => {
    const [phrase, setPhrase] = useState('');

    const handlePhraseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhrase(e.target.value);
    };

    const handlePhraseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phrase === '') return;
        setPhrases(prevPhrases => [...prevPhrases, { phrase }]);
        setPhrase('');
    };

    return (
        <form className={classes.form} onSubmit={handlePhraseSubmit} data-testid="phrase-input-form">
            <input
                type="text"
                value={phrase}
                onChange={handlePhraseChange}
                data-testid="phrase-input"
                className={classes.input}
                placeholder='Escribe una frase'
            />
            <Button type="submit" size='medium' color='secondary'>Agregar Frase</Button>
        </form>
    );
};

export default PhraseInput;
