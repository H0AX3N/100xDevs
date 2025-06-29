import React, { useEffect, useRef } from 'react'

function usePrev(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current;
}

// in react, it returns first, effect gets called after render
// so it returns previous value

export default usePrev
