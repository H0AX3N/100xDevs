import React, { useEffect, useState } from 'react'

function useFetch(url, time) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(url)
            const json = await response.json();
            setData(json);
            setLoading(false);
            console.log(json);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        setInterval(() => {
            fetchData();
        }, time * 1000)
    }, [])

    return {
        data,
        loading
    };
}

export default useFetch
