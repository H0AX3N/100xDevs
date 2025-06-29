import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

/*
 * FetchedData is a React component that fetches and displays data from a JSON placeholder API.
 * It allows the user to select data by ID using buttons. The data is displayed in JSON format,
 * and a loading message is shown while the data is being fetched.
 */

function FetchedData() {
    const [id, setId] = useState(1);
    const { data, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <button onClick={() => setId(1)}>1</button>
            <button onClick={() => setId(2)}>2</button>
            <button onClick={() => setId(3)}>3</button>
            
            {JSON.stringify(data)}
        </div>
    )
}

export default FetchedData
