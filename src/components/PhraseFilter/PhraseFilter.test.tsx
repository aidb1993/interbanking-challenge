import { render, fireEvent, screen } from '@testing-library/react';
import PhraseFilter from "./PhraseFilter";


describe('PhraseFilter', () => {
    it('should filter the list of phrases when the input is changed', () => {
        const setFilter = jest.fn();
        render(<PhraseFilter setFilter={setFilter} />);
        const filterInput = screen.getByTestId('filter-input');
        fireEvent.change(filterInput, { target: { value: 'test phrase' } });
        expect(setFilter).toBeCalled();
    });
});