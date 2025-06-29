import React from 'react'
import useDebounce from '../hooks/useDebounce'

function DebounceSearch() {
    function data() {
        console.log('Jeet')
    }
    const debounceFn = useDebounce()
    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default DebounceSearch
