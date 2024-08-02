import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const projects = [
  {
    title: 'E-University',
    description: 'A University Portal to upload research papers',
    button: 'GitHub',
    link: 'https://github.com/E-University-Portal/e-uni',
    tech1: 'JavaScript',
    tech2: 'React',
    tech3: 'Tailwind',
    tech4: 'Figma'
  },
  {
    title: 'Air-Mouse',
    description: 'OpenCV-python project to control mouse pointer through hand movements',
    button: 'GitHub',
    link: 'https://github.com/oceanlakra/air-mouse',
    tech1: 'Python',
    tech2: 'OpenCV',
    tech3: 'mediapipe'
  },
  {
    title: 'SDA',
    description: 'ML Research Project for Stress Detection',
    button: 'Research Project',
    tech1: 'Python',
    tech2: 'Tensorflow'
  },
  {
    title: 'NPTEL Validator',
    description: 'An online verification system to authenticate NPTEL certificates',
    button: 'GitHub',
    link: 'https://github.com/madhavarora03/nptel-poc',
    tech1: 'Python',
    tech2: 'Flask',
    tech3: 'Selenium'
  },
  // Add more projects as needed
];

const Card = () => {
  return (
    <div className="carousel w-full space-x-2 p-2">
      {projects.map((project, index) => (
        <div key={index} className="carousel-item w-1/4">
          <div className="card w-96 bg-zinc-800 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
                <div className='flex'>
                {project.tech1 && <div className="badge badge-outline mx-2">{project.tech1}</div>}
                {project.tech2 && <div className="badge badge-primary badge-outline mx-2">{project.tech2}</div>}
                {project.tech3 && <div className="badge badge-secondary badge-outline mx-2">{project.tech3}</div>}
                {project.tech4 && <div className="badge badge-accent badge-outline mx-2">{project.tech4}</div>}
                </div>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-blue-800 rounded-lg">
                    <a href={project.link} target='_blank'>
                     {project.button}
                 </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
