import { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

const Button = ({ children }) => {
    const { result, setResult } = useContext(ResultContext);

    const handleClick = (e) => {
        const val = e.target.innerHTML;

        if (/[0-9]/.test(val)) {
            return setResult(res => {
                return {
                    ...res,
                    input: `${res.input}${val}`,
                    operator: ""
                }
            })
        }


        if (val === '+' || val === '-' || val === '*' || val === '/') {
            if (result.operator === "") {
                return setResult(res => {
                    return {
                        ...res,
                        input: `${res.input}${val}`,
                        operator: val
                    }
                })
            } else {
                return setResult(res => {
                    const operator_idx = res.input.lastIndexOf(res.operator);
                    const replaceArr = res.input.split("")
                    replaceArr[operator_idx] = val;

                    return {
                        ...res,
                        operator: val,
                        input: replaceArr.join("")
                    }

                })
            }
        }

        if (val === 'C') {
            return setResult({
                output: "",
                operator: "",
                input: ""
            })
        }

        if (result.input === "")
            return setResult({
                ...result,
                output: "Error"
            })

        if (result.operator !== "") {
            return setResult({
                ...result,
                output: "Error"
            })
        }

        setResult(res => {
            return {
                ...res,
                output: eval(res.input)
            }
        })
    }

    return (
        <button className="btn" onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button;
