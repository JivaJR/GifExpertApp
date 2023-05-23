
export const GifGridItem = ({title,url}) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <a href={url} target="_blank"><p>{title}</p></a>
        </div>
        //<li key={id}>{ title}</li>
    )
}
