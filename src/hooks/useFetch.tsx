import { useState, useEffect } from "react"
interface FetchState<T> {
    data: T | null,
    loading: boolean,
    error: Error | null
}
export function useFetch<T>(url: string):FetchState<T>{
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            
            setState({data: null, loading: true, error: null});

            try {
                const res = await fetch(url, {signal: controller.signal});
                if(!res.ok){
                    throw new Error("Error is error hehehe");
                }
                const jsonData = await res.json() as T;
                setState({data: jsonData, loading: false, error: null});
            } catch (error) {
                if(error instanceof Error && error.name === "AbroatError"){
                    console.log('Fetch Aborted');
                } else {
                    setState({data: null, loading: false, error: error as Error});
                }
            }
        }

        fetchData();

        return () => {
            controller.abort();
        }
    }, [url]);
    return state;
}