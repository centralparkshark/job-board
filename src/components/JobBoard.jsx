import { useEffect, useState } from "react";
import JobPost from "./JobPost";
import SearchBar from "./SearchBar";

export default function JobBoard() {

    const apiKey = import.meta.env.VITE_API_KEY
    const baseURL = "/api/jobs/?search="

    const [data, setData] = useState(null)
    const [url, setUrl] = useState("/api/jobs/")

    // "/api/jobs/?search=software"
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
    }, [url]);

    return (
        <div>
            <h1>Job Board</h1>
            <SearchBar />
            {data ? (
                <div>
                    {data.results.map((job) => (
                        <JobPost key={job.id} {...job}></JobPost>
                    ))}
                    {data.prev && <a href={data.prev}>Previous</a>}
                    {data.next && <a href={data.next}>Next</a>}
                </div>
            ) : <div>Loading...</div>}
            
        </div>
    )
}
