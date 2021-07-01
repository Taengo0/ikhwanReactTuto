import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if(!res.ok) {
                throw Error("Couldn fetch!")
            }
            return res.json();
        })
        .then((data => {
            console.log(data)
            if (data) {
                setData(data);
                setIsloading(false)
                setError(null)
            }
        })).catch((err) => {
            if(err.name ==='AbortError') {
                console.log("aborted")
            } else {
                setError(err.message)
            setIsloading(false)
            }
        })

        return () => abortCont.abort();
    }, [url]);

    return {data, isloading, error};
}
export default useFetch;