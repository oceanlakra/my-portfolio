import React from 'react'

function Card() {
  return (
    <div className='m-4 carousel carousel-center rounded-box'>
        <div className="card bg-zinc-800 w-96 shadow-xl m-4">
            <div className="card-body">
                <h2 className="card-title">E-University</h2>
                <div className="badge badge-secondary badge-outline">Ongoing</div>
                <p>An online portal for uploading research papers </p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-800 rounded-lg">
                    <a href='https://github.com/E-University-Portal/e-uni' target='_blank'>
                        Github
                    </a>
                </button>
                </div>
            </div>
        </div>
        <div className="card bg-zinc-800 w-96 shadow-xl m-4">
            <div className="card-body">
                <h2 className="card-title">NPTEL Validator</h2>
                <div className="badge badge-secondary badge-outline">Ongoing</div>
                <p>Verify NPTEL certificates online</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-800 rounded-lg">
                    <a href='https://github.com/madhavarora03/nptel-poc' target='_blank'>
                        Github
                    </a>
                </button>
                </div>
            </div>
        </div>
        <div className="card bg-zinc-800 w-96 shadow-xl m-4">
            <div className="card-body">
                <h2 className="card-title">Air Mouse</h2>
                <p>Control your mouse pointer by hovering your hand in the air</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-800 rounded-lg">
                <a href='https://github.com/oceanlakra/air-mouse' target='_blank'>
                    Github
                </a>
                </button>
                </div>
            </div>
        </div>
        <div className="card bg-zinc-800 w-96 shadow-xl m-4">
            <div className="card-body">
                <h2 className="card-title">SDA</h2>
                <div className="badge badge-secondary badge-outline">Research</div>
                <p>Ongoing ML research project used to detect stress levels and mental health</p>
            </div>
        </div>
    </div>
  )
}

export default Card
