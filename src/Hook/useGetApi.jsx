import React, { useEffect, useState } from 'react'

function useGetApi(endpoint) {
    const [response,setResponse] = useState()
    const url = `http://127.0.0.1:8000/web/${endpoint}/`
    useEffect(() => {
      async function getData(){
        const req = await fetch(url)
        const reqJson = await req.json()
        setResponse(reqJson)
    }
    getData()
    },[])
  return {response}
}

export default useGetApi