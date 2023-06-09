import { render, screen } from '@testing-library/react';
import Button from './Button';


describe('Button', () => {
    it('should display a button', () => {
        render(<Button />);
        const button = screen.getByTestId('common-button');
        expect(button).toBeInTheDocument();
    });
    it('should display a button with text', () => {
        const buttonText = 'test button text';
        render(<Button>{buttonText}</Button>);
        const button = screen.getByText(buttonText);
        expect(button).toBeInTheDocument();
    });
}
);