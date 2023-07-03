import React, { useState } from 'react';
import Logo from "../assets/logo.jpeg"

const funFacts = [
  'I know how to solve 6 different types of Rubik\'s cubes.',
  'I am an ex-astrophysics major.',
  'I\'ve never broken a bone.',
  'I am from India.',
  'I have gotten a haircut in front of 50 people.'
];

const LoadingScreen = () => {
  const [fact, setFact] = useState(funFacts[Math.floor(Math.random() * funFacts.length)]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-10">
        <img src={Logo} alt="logo" className="top-0% left-0%"/>
        <p>{fact}</p>
    </div>
  );
};

export default LoadingScreen;
