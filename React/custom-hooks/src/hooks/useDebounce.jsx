import React, { useRef } from 'react'

function useDebounce(originalFn) {
    const currentClock = useRef()
    function debounce() {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalFn, 1000)
    }
    return debounce     
}

export default useDebounce
