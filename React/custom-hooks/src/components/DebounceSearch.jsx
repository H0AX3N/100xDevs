import React from 'react'
import useDebounce from '../hooks/useDebounce'

function DebounceSearch() {
    function data() {
        console.log('Jeet')
    }
    const debounceFn = useDebounce(data)    
    return (
        <div>
            <input type="text" onChange={debounceFn} />
        </div>
    )
}

export default DebounceSearch
