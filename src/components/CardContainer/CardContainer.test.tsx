import { render, screen } from '@testing-library/react';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
    it('should display a list of phrases', () => {

        const phrases = [
            { phrase: 'test phrase 1' },
            { phrase: 'test phrase 2' },
            { phrase: 'test phrase 3' },
        ];

        render(<CardContainer phrases={phrases} />);

        const cardContainer = screen.getByTestId('card-container');
        expect(cardContainer).toBeInTheDocument();
        expect(cardContainer.children).toHaveLength(phrases.length);

        phrases.forEach((phrase) => {
            const card = screen.getByText(phrase.phrase);
            expect(card).toBeInTheDocument();
            expect(card).toHaveTextContent(phrase.phrase);
        });
    });
});
