import { useContext } from "react"
import { ResultContext } from "../context/ResultContext"

const Output = () => {
    const { result } = useContext(ResultContext);
    return <>
        {
            result && <div className="output">{`${result.output}`}</div>
        }

    </>
}

export default Output
