export function saveToLocal(id) {
    console.log(id)
    let existingSave = JSON.parse(localStorage.getItem("savedPosts"))
    if (!existingSave) existingSave = [];
    existingSave.push(id)
    localStorage.setItem("savedPosts", JSON.stringify(existingSave))
}

export default function SavedPosts() {
    return (
        <div>This is saved.</div>
    )
}