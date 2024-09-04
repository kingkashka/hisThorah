function FootNoteCard(props){
    const {title, footNotes} = props
    return(
        <div className="footNote">
            <h3>{title}</h3>
            <p>{footNotes}</p>
        </div>
    )
}
export default FootNoteCard