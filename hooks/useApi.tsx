"use-client"
import React from 'react'
import { useState, useEffect } from 'react'

const useApi = (endpoint: any) => {

    const [data, setData] = useState();

    useEffect(()=> {
        async function fetchData() {
            const response  = await fetch(`https://streaming-availability.p.rapidapi.com/v2${endpoint}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '076243ec84mshd651fe569eedf1fp1cd35fjsn16d4c69e1f36',
                    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
                }
            });

            const data = await response.json()
            setData(data)
        }

        fetchData()
    }, [])
  return data;
}

export default useApi