import { useEffect, useState } from "react";
import JobPost from "./JobPost";

export default function JobBoard() {

    const apiKey = import.meta.env.VITE_API_KEY

    const [data, setData] = useState(null)
    const [url, setUrl] = useState("/api/jobs/?search=react&date_range__gte=7")
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
            {data ? (
                <div>
                    {data.results.map((job) => (
                        <JobPost key={job.id} {...job}></JobPost>
                    ))}
                </div>
            ) : <div>Loading...</div>}
        </div>
    )
}


// <div>{data.results[0].title}</div>
// <button src={data.prev}>Prev</button>
// <button src={data.next}>Next</button>