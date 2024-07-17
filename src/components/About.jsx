import React from 'react'
import Avatar from '../ui/Avatar'
import TypingEffect from '../ui/TypingEffect'
import ContactMe from '../ui/ContactMe'
import PdfViewer from '../ui/PdfViewer'

function About() {
  return (
    <div>
        <div className="card card-side bg-zinc-800 shadow-xl m-4 mb-10">
            <figure>
                <img
                src="/assets/avatar.png"
                alt="Movie" 
                className='w-80 h-80 m-8 rounded-full'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white text-4xl font-mono font-semibold">Hey there! I'm {<TypingEffect />}</h2>
                <ContactMe />
                <div className="card-actions justify-between">
                    <button className="btn text-white font-mono font-semibold rounded-lg text-xl" onClick={()=>document.getElementById('my_modal_2').showModal()}>View Resume</button>
                    <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                    <div>
                        <PdfViewer pdfUrl="/assets/Ocean_Resume.pdf" />
                    </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                    </dialog>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
