import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingEffect = (props) => {
  const [text] = useTypewriter({
    words: props.words,
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

