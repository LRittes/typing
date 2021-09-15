import { Matched, Remainder } from "./styles"

const Word = ({ word ,validKeys }) => {
    if(!word) return null
    const joinedKeys = validKeys.join('')
    const matched = word.slice(0, joinedKeys.length)
    const remainder = word.slice(joinedKeys.length)

    return (
        <>
            <Matched className="matched">{matched}</Matched>
            <Remainder className="remainder">{remainder}</Remainder>
        </>
    )
}

export default Word;