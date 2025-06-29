import React, { useState } from 'react'

function useCounter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count => count + 1);
    }
    function decrement() {
        setCount(count => count - 1);
    }
    
    return {
        count, 
        increment, 
        decrement
    }
}

export default useCounter
