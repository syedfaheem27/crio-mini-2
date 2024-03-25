import { useEffect, useState } from "react"


function App() {
  const [timer, setTimer] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const seconds = timeElapsed % 60;
  const minutes = Math.floor(timeElapsed / 60) % 60;
  const hours = Math.floor(timeElapsed / 3600) % 60;


  const handleStart = () => {
    const timer = setInterval(() => {
      setTimeElapsed(t => t + 1);
    }, 1000);

    setTimer(timer)
  }


  const handlePause = () => {
    if (timer !== null) {
      clearInterval(timer)
      setTimer(null)
    }
  }

  const handleReset = () => {
    clearInterval(timer);
    setTimer(null);
    setTimeElapsed(0)
  }


  useEffect(() => {
    return () => {
      if (timer !== null)
        clearInterval(timer)
    }
  }, [timer])
  return (
    <>
      <h1>
        Stopwatch
      </h1>
      <div className="container">
        Time: {minutes}:{seconds <= 9 ? `0${seconds}` : seconds}
      </div>
      <button onClick={timer !== null ? handlePause : handleStart}>{timer !== null ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
