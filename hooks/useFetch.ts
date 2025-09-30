import { useEffect, useState } from "react"

export const useFetch = <T>(fetchMethod: () => Promise<T>, autoFetch: true) => {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async () => {
        try {
            setLoading(true)

            const result = await fetchMethod()
            setResponse(result)
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(`This is an error in catch in use fetch: ${err.message}`);
            }
        } finally {
            setLoading(false)
        }
    }

    const reset = () => {
        setResponse(null)
        setLoading(false)
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData()
        }
    }, [])

    return {
        response,
        loading,
        reset,
        fetchData
    }
}
