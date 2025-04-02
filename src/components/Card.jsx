export default function Card({title, description, image, bgColor, step, nextStep, prevStep}) {
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
                <span className={`${step === 0 ? 'dot active' : 'dot'}`}></span>
                <span className={`${step === 1 ? 'dot active' : 'dot'}`}></span>
                <span className={`${step === 2 ? 'dot active' : 'dot'}`}></span>
              </div>
              <button onClick={prevStep} className = {`btn btn-light rounded-circle ${step === 0 ? 'd-none' : ''}`}>←</button>
              <button onClick={nextStep} className={`btn btn-dark rounded-circle ${step === 2 ? 'd-none' : ''}`}>→</button>
            </div>
          </div>
        </div>
      </div>
    )
}
