import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

function ReFetch() {
    const [id, setId] = useState(1)
    const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 5)
    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default ReFetch
