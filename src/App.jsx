import { useEffect, useState } from "react"
import data from './resource/db.json'
import { Word } from './components'

import { GlobalStyles } from "./globalStyles"

const MAX_TYPED_KEYS = 30

const getWord = () => {
    const index = Math.floor(Math.random() * data.length)
    const word = data[index]
    return word.toLowerCase()
}

const isValidKey = (key, word) => {
    if(!word) return false;
    const result = word.split('').includes(key)
    return result
}

const App = () => {
    const [typedKeys, setTypedKeys] = useState([])
    const [validKeys, setValidKeys] = useState([])
    const [word, setWord] = useState('')

    useEffect(() => {
        setWord(getWord())
    }, [])

    const handleKeydown = (e) => {
        e.preventDefault()

        const { key } = e

        setTypedKeys((prev) => [...prev, key].slice(MAX_TYPED_KEYS * (-1)))
        if(isValidKey(key, word)){
            setValidKeys((prev) => {
                const isValidLength = prev.length <= word.length
                const isNextChar = isValidLength && word[prev.length] === key
                return isNextChar ? [...prev, key] : prev
            })
        }
    }

    return (
        <div className="container" tabIndex='0' onKeyDown={handleKeydown}>
            <div className="valid-keys">
                <Word word={word} validKeys={validKeys} />
            </div>
            <div className="typed-keys">{typedKeys ? typedKeys.join(' ') : null}</div>
            <div className="completed-words">
                <ol>
                    <li>cidade</li>
                    <li>carro</li>
                    <li>puta</li>
                </ol>
            </div>
            <GlobalStyles/>
        </div>
    )
}

export default App;