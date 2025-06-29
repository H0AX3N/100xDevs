import React, { useState } from 'react'
import usePrev from '../hooks/usePrev'

function PrevValue() {
    const [count, setCount] = useState(0)
    const prev = usePrev(count)
    
    return (
        <div>
            <p>current value : {count}</p>
            <button onClick={() => setCount(curr => curr + 1)}>Click</button>
            <p>previous value : {prev}</p>
        </div>
    )
}

export default PrevValue
