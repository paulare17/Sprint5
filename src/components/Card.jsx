export default function Card({title, description, image}) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={image}></img>
            <h1> {title}</h1>
            <p>{description}</p>
            </div>
        </div>
    )
}
