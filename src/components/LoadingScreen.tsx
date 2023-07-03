import React, { useState, useEffect } from 'react';
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
        <>
            <style>
                {
                    `@keyframes logoTransition {
                        0%   {filter: grayscale(100%);}
                        100% {filter: grayscale(0%);}
                    }
                    
                    #logo {
                        animation-name: logoTransition;
                        animation-duration: 2s;
                        animation-timing-function: linear;
                        animation-fill-mode: forwards;
                    }
                    `
                }
            </style>
            <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-10">
                <div>
                    <div className="relative w-96 h-48">
                        <img src={Logo} alt="logo" id="logo" className="absolute top-0 left-0 w-full h-full"/>
                    </div>
                    <p>{fact}</p>
                </div>
            </div>
        </>
     
    );
  };
  
  export default LoadingScreen;
  
