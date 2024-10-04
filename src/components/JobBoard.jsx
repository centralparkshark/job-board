import { useEffect, useState } from "react";
import JobPost from "./JobPost";
import SearchBar from "./SearchBar";

export default function JobBoard() {

    const apiKey = import.meta.env.VITE_API_KEY
    const baseURL = "/api/jobs/?search="

    const [data, setData] = useState(null)
    const [url, setUrl] = useState("/api/jobs/")

    useEffect(() => {
        fetch(url, {
            headers: {
                'Authorization': `Token ${apiKey}`,
                'Content-Type': 'application/json',
                'Allow': 'GET, HEAD, OPTIONS'
            }
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => {
            console.log(error)
        })
    }, [apiKey, url]);


    function handleSubmit(search) {
        setUrl(baseURL + search)
    }

    return (
        <div>
            <h1>Job Board</h1>
            <SearchBar onSearch={handleSubmit}/>
            {data ? (
                <div>
                    {data.results.length > 0 ? (data.results.map((job) => (
                        <JobPost key={job.id} {...job} onSearch={handleSubmit}></JobPost>
                    ))) : <div>No results found.</div>}
                </div>
            ) : <div>Loading...</div>}
            
        </div>
    )
}
