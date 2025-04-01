export default function Card({title, description, image, bgColor, nextStep}) {
    return (
        <div className={`card-container `}>
        <div className={`card `}>
          <div className={`card-header ${bgColor}`}>
            <img src={image} alt={title} />
          </div>
          <div className="card-body">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="card-footer">
              <div className="dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <button onClick={nextStep} className="btn btn-dark rounded-circle">➝</button>
            </div>
          </div>
        </div>
      </div>
    )
}
