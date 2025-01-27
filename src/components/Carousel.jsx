import React from 'react'



function Carousel() {
  return (
    <div>
        <div className="carousel carousel-center rounded-box m-4">
            <div className="carousel-item">
                <img className='w-72 h-72 ' src="/assets/python.png" alt="Python" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72 ' src="/assets/tensorflow.png" alt="TensorFlow" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72 ' src="/assets/flask.png" alt="Flask" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72' src="/assets/javascript.png" alt="JavaScript" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72' src="/assets/react.png" alt="React" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72' src="/assets/tailwind.png" alt="Tailwind" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72' src="/assets/mysql.png" alt="MySQL" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72' src="/assets/firebase.png" alt="Firebase" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72' src="/assets/mongodb.png" alt="MongoDB" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72' src="/assets/github.png" alt="github" />
            </div>
            <div className="carousel-item">
                <img className='w-72 h-72' src="/assets/figma.png" alt="figma" />
            </div>
        </div>
    </div>
  )
}

export default Carousel
