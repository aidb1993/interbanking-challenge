import { render, fireEvent, screen } from '@testing-library/react';
import PhraseInput from "./PhraseInput";

describe('PhraseInput', () => {
  it('should add a phrase to the list when the form is submitted', () => {
    const setPhrases = jest.fn();
    render(<PhraseInput setPhrases={setPhrases} />);
    const phraseInput = screen.getByTestId('phrase-input');
    const phraseInputForm = screen.getByTestId('phrase-input-form');
    fireEvent.change(phraseInput, { target: { value: 'test phrase' } });
    fireEvent.submit(phraseInputForm);
    expect(setPhrases).toBeCalled();
  });
  it('should clear the input when the form is submitted', () => {
    const setPhrases = jest.fn();
    render(<PhraseInput setPhrases={setPhrases} />);
    const phraseInput = screen.getByTestId('phrase-input');
    const phraseInputForm = screen.getByTestId('phrase-input-form');
    fireEvent.change(phraseInput, { target: { value: 'test phrase' } });
    fireEvent.submit(phraseInputForm);
    expect(phraseInput).toHaveValue('');
  });
  it('should not add a phrase to the list when the input is empty', () => {
    const setPhrases = jest.fn();
    render(<PhraseInput setPhrases={setPhrases} />);
    const phraseInputForm = screen.getByTestId('phrase-input-form');
    fireEvent.submit(phraseInputForm);
    expect(setPhrases).not.toBeCalled();
  });
});