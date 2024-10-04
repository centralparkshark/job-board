import { useState } from "react"

export default function SearchBar(props) {
    
    const [value, setValue] = useState("")

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSearch(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search..." value={value} onChange={handleChange}/>
            <button>Search</button>
        </form>
        
    )
}