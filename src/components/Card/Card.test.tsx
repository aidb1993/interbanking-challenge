import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
    it('should display a phrase', () => {
        const phrase = { phrase: 'test phrase' };
        render(<Card phrase={phrase} />);
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument();
        expect(card).toHaveTextContent(phrase.phrase);
    });
});