import { useEffect,useState } from "react";

const useFetch = (url) =>{



    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(resp =>{
            if(!resp.ok)
            {
                throw Error('could not get resp')
            }
                return resp.json()            
        })
        .then(data =>{
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch((error)=>
        {
            setIsPending(false)
            setError(error.message)
        })
    },[])

    return {data,isPending,error}
}

export default useFetch;