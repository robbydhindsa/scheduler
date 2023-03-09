import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Function for transitioning to next view/Appointment component
  function transition(newMode, replace = false) {
    setHistory(prev => replace ? [...prev.slice(0,-1), newMode] : [...prev, newMode])
    setMode(newMode);
  }

  // Function for going back to previous view/Appointment component
  function back() {
    if (history.length > 1) {
      setHistory(prev =>  {
        const newArr = [...prev.slice(0,-1)]
        setMode(newArr[newArr.length -1])
        return newArr
      })
    }
  }

  return { mode, transition, back };
}
