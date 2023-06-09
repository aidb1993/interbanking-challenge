import React from 'react';
import classes from './PhraseFilter.module.css';

interface PhraseFilterProps {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const PhraseFilter: React.FC<PhraseFilterProps> = ({ setFilter }) => {

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };


    return (
        <form className={classes.form}>
            <input className={classes.input} type="text" onChange={handleFilterChange} data-testid="filter-input" placeholder='Filtrar por palabras' />
        </form>
    );
};

export default PhraseFilter;
