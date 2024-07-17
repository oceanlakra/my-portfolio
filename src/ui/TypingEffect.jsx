import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
  const [text] = useTypewriter({
    words: ['Ocean Lakra', 'an aspiring Web Developer', 'a Freelancer', 'a Computer Science Student', 'a Machine Learning Student'],
    loop: 0, // Number of loops (0 means infinite)
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div>
      <span className="card-title text-white text-4xl font-mono font-semibold">
        {text}
        <Cursor />
      </span>
    </div>
  );
};

export default TypingEffect;

