import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App', () => {
    it('should add a phrase when entered in the input', () => {
        render(<App />)

        const input = screen.getByTestId('phrase-input')
        const addButton = screen.getByText('Agregar Frase')

        fireEvent.change(input, { target: { value: 'Test phrase' } })
        fireEvent.click(addButton)

        const card = screen.getByText('Test phrase')
        expect(card).toBeInTheDocument()
    })

    it('should filter phrases based on the entered filter value', () => {
        render(<App />)

        const input = screen.getByTestId('filter-input')

        fireEvent.change(screen.getByTestId('phrase-input'), { target: { value: 'Test phrase 1' } })
        fireEvent.click(screen.getByText('Agregar Frase'))
        fireEvent.change(screen.getByTestId('phrase-input'), { target: { value: 'Test phrase 2' } })
        fireEvent.click(screen.getByText('Agregar Frase'))
        fireEvent.change(screen.getByTestId('phrase-input'), { target: { value: 'Another phrase' } })
        fireEvent.click(screen.getByText('Agregar Frase'))

        fireEvent.change(input, { target: { value: 'Test' } })

        const displayedPhrases = screen.getAllByTestId('card')
        expect(displayedPhrases.length).toBe(2)
        expect(displayedPhrases[0]).toHaveTextContent('Test phrase 1')
        expect(displayedPhrases[1]).toHaveTextContent('Test phrase 2')
    })
})
