import { useContext } from "react"
import { ResultContext } from "../context/ResultContext"

const Input = () => {
    const { result } = useContext(ResultContext);
    return (<>

        <input type="text" className="input" value={result.input} />
    </>
    )
}

export default Input
