import { useEffect, useState } from "react";
import Post from "./Post";
import SearchBar from "./SearchBar";

export default function JobBoard() {

    const apiKey = import.meta.env.VITE_API_KEY
    // const API_URL = import.meta.env.VITE_API_URL
    //const API_URL = import.meta.env.VITE_DEV_URL
    const baseURL = `/api/jobs/?search=`

    const [data, setData] = useState(null)
    const [url, setUrl] = useState(`/api/jobs/`)
    const [view, setView] = useState("Job Board")

    useEffect(() => {
        fetch(url, {
            headers: {
                'Authorization': `Token ${apiKey}`,
                'Content-Type': 'application/json',
                'Allow': 'GET, HEAD, OPTIONS',
            }
        })
        .then(response => {
            console.log("Response:", response)
            return response.json()})
        .then(data => {
            console.log('Data:', data)
            setData(data)})
        .catch(error => {
            console.log(error)
        })
    }, [apiKey, url]);


    function handleSubmit(search) {
        setView("Job Board")
        setUrl(baseURL + search)
    }

    function selectView(newView) {
        setView(newView)
        if (newView == "Saved Jobs") {
            let savedPosts = JSON.parse(localStorage.getItem("savedPosts"))
            let newData = {}
            newData.results = data.results.filter(job => savedPosts.includes(job.id))
            setData(newData)
        } else {
            setUrl(baseURL)
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
                {data.results.length > 0 ? (data.results.map((job) => (
                <Post key={job.id} {...job} onSearch={handleSubmit}></Post>
            ))) : <div>No results found.</div>}
               </>
            ) : <div>Loading...</div>}
            
        </div>
    )
}
