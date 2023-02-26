import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    // if (replace === true) {
    //   history.replace()
    // }
    // history.push(newMode);

    // if (replace) {
    //   setHistory(prev => [...prev.slice(0,-1), newMode])
    // } else {
    //   setHistory(prev => [...prev, newMode])
    // }
    
    setHistory(prev => replace ? [...prev.slice(0,-1), newMode] : [...prev, newMode])
    setMode(newMode);
  }
  function back() {
    if (history.length > 1) {
      // history.pop();
      // const lastElementOfArray = history.length - 1;
      // const newMode = history[lastElementOfArray];
      // setMode(newMode);
      setHistory(prev =>  {
        const newArr = [...prev.slice(0,-1)]
        setMode(newArr[newArr.length -1])
        return newArr
      })
    }
  }

  return { mode, transition, back };
}

/*
mode: 1
history: [1]
=> transtion(2)
mode: 2
history: [1, 2]
=> transition (3, true)
mode: 3
history: [1, 3] 
=> back()
mode: 1
history: [1]
*/
