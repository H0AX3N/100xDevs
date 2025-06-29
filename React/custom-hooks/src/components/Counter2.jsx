import React from "react";
import useCounter from "../hooks/useCounter";

function Counter2() {
    const { count, decrement } = useCounter()

    return (
        <div>
            <button onClick={decrement}>Decrease {count}</button>
        </div>
    );
}

export default Counter2;
