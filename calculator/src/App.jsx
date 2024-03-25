import Cacluator from "./components/Cacluator"
import Output from "./components/Output"
import Input from "./components/Screen"
import { ResultProvider } from "./context/ResultContext"

function App() {
  return (
    <ResultProvider>
      <h1>
        React Calculator
      </h1>
      <Input />
      <Output />
      <Cacluator />
    </ResultProvider>
  )
}

export default App
