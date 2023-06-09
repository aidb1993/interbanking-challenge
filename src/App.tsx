import { useState, useEffect } from 'react'
import classes from './App.module.css'
import CardContainer from './components/CardContainer/CardContainer'
import PhraseInput from './components/PhraseInput/PhraseInput'
import Phrase from './types/Phrase'
import PhraseFilter from './components/PhraseFilter/PhraseFilter'

function App() {
  const [phrases, setPhrases] = useState<Phrase[]>([])
  const [filteredPhrases, setFilteredPhrases] = useState<Phrase[]>([])
  const [filter, setFilter] = useState<string>('')
  useEffect(() => {
    setFilteredPhrases(phrases.filter((phrase) => phrase.phrase.includes(filter)))
  }, [phrases, filter])
  return (
    <>
      <div className={classes.appContainer}>
        <div className={classes.inputContainer}>
          <PhraseInput setPhrases={setPhrases} />
          <PhraseFilter
            setFilter={setFilter}
          />
        </div>
        <CardContainer
          phrases={filteredPhrases}
        />
      </div>
    </>
  )
}

export default App
