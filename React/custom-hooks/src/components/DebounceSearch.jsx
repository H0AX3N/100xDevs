import React from 'react'
import useDebounce from '../hooks/useDebounce'

function DebounceSearch() {
    function data() {
        console.log('Jeet')
    }
    const debounceFn = useDebounce()
    return (
        <div>
            
        </div>
    )
}

export default DebounceSearch
