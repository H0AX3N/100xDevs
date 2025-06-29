import React from 'react'
import useCounter from '../hooks/useCounter'

function Counter() {
    const { count, increment } = useCounter()
    return (
        <div>
            <button onClick={increment}>Increase {count}</button>
        </div>
    )
}

export default Counter
