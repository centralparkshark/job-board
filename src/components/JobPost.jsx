let now = new Date();
now = new Date(now.getFullYear(), now.getMonth(), now.getDate())

function lessThanAWeek(jobDate) {
    let givenDate = new Date(jobDate);
    givenDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate())
    

    const differenceInTime = givenDate - now;
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24) * -1

    if (differenceInDays <= 14 && differenceInDays >= 0) {

        return differenceInDays
    } else {
        return false;
    }
}

export default function JobPost(props) {
    let daysOld = lessThanAWeek(props.date_posted)
    
    let keywordIndex = 0;


    function handleClick(word) {
        props.onSearch(word)
    }

    function saveToLocal(id) {
        console.log(id)
    }

    return (
        <>
            {daysOld ? (
                <div className="card" key={props.id}>
                    <div className="saveBanner" onClick={() => saveToLocal(props.id)}></div>
                    <div className="header">
                        <h2>{props.role}</h2>
                        <h3>{props.company_name}</h3>
                    </div>
                    {props.location && <p>Location: {props.location}</p>}
                    <div className="postAge">{daysOld} days ago</div>
                    <div className="keywordHolder">
                        {props.keywords.map((word) => (
                            <div key={keywordIndex++} className="keyword" onClick={() => handleClick(word)}>{word}</div>
                        ))}
                    </div>
                    <div className="buttonHolder">
                        <a href={props.url}>Apply</a>
                    </div>
                </div>
            ) : <></>}
        </>
        
    )
}