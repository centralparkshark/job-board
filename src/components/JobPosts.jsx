import Post from "./Post"

export default function JobPosts(props) {
    console.log(props)
    return (
        <div>
            {props.results.length > 0 ? (props.results.map((job) => (
                <Post key={job.id} {...job} onSearch={props.handleSubmit}></Post>
            ))) : <div>No results found.</div>}
        </div>
    )
}