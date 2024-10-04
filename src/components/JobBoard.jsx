import { useEffect, useState } from "react";
import JobPosts from "./JobPosts";
import SavedPosts from "./SavedPosts";
import SearchBar from "./SearchBar";

export default function JobBoard() {

    const apiKey = import.meta.env.VITE_API_KEY
    const baseURL = "/api/jobs/?search="

    const [data, setData] = useState(null)
    const [url, setUrl] = useState("/api/jobs/")
    const [view, setView] = useState("Job Board")

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

    function selectView(newView) {
        setView(newView)
        if (newView == "Saved Jobs") {
            //
        }
    }

    return (
        <div>
            {view == "Job Board" ? 
            <button onClick={() => selectView("Saved Jobs")}>View Saved Jobs</button> : 
            <button onClick={() => selectView("Job Board")}>View Job Board</button>}
            
            <h1>{view}</h1>

            {view == "Job Board" ? <SearchBar onSearch={handleSubmit}/> : ''}
            
            {data ? (
               <>
                {view == "Job Board" ? <JobPosts {...data} onSearch={handleSubmit}>this is where job posts go</JobPosts>: <SavedPosts onSearch={handleSubmit} {...data}>this is where saved posts go</SavedPosts> }
               </>
            ) : <div>Loading...</div>}
            
        </div>
    )
}
