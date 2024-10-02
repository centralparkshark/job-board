import { useState } from "react"

export default function SearchBar() {
    
    const [value, setValue] = useState("")

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search..." value={value} onChange={handleChange}/>
            <button>Search</button>
        </form>
        
    )
}