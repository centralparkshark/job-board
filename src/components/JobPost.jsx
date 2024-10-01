function lessThanAWeek(jobDate) {
    let givenDate = new Date(jobDate);
    givenDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate())
    let now = new Date();
    now = new Date(now.getFullYear(), now.getMonth(), now.getDate())

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
    
    
    return (
        <>
            {daysOld ? (
                <div>
                    <h2>{props.role}</h2>
                    <h4>{props.company_name}</h4>
                    {props.location && <p>Location: {props.location}</p>}
                    <div>Posted: {daysOld} days ago</div>
                    <button href={props.url}>Apply</button>
                </div>
            ) : <></>}
        </>
        
    )
}