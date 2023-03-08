import { useEffect, useState } from 'react';

export default function useFetch(url, options, deps=[]){
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                setLoading(true);
                if (!response.ok){
                    throw new Error(`HTTP error, check your connection. ${response.status}`);
                }
                const json = await response.json();
                console.log(json);
                setData(json);
                setLoading(false);
            } catch(error) {
                setError(error);
                setLoading(false);
            }
        }
        url && fetchData();
    }, deps);
    return {data, loading, error};
}