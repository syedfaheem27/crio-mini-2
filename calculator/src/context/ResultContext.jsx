import { useState } from "react";
import { createContext } from "react";

export const ResultContext = createContext();


export const ResultProvider = ({ children }) => {
    const [result, setResult] = useState({
        operator: "",
        input: "",
        output: ""
    })
    return <ResultContext.Provider value={{
        result, setResult
    }}>
        {
            children
        }
    </ResultContext.Provider>
}