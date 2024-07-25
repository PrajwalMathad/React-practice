export default function ErrorBlock({title, text}) {
    return(
        <div className="error">
            <h3 className="error-text">{title}</h3>
            <p className="error-text">{text}</p>
        </div>
    )
}