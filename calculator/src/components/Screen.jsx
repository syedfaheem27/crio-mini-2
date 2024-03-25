import { useContext } from "react"
import { ResultContext } from "../context/ResultContext"

const Input = () => {
    const { result } = useContext(ResultContext);
    return (
        <div className="input">
            <span>{result.input}</span>
        </div>
    )
}

export default Input
