import  { useState } from 'react';
import ParticleBackground from './particles';
import Typed from 'react-typed';

const funFacts = [
  'I know how to solve 6 different types of Rubik\'s cubes.',
  'I am an ex-astrophysics major.',
  'I\'ve never broken a bone.',
  'I am from India.',
  'I have gotten a haircut in front of 50 people.'
];

const LoadingScreen = () => {
    const [fact, _setFact] = useState(funFacts[Math.floor(Math.random() * funFacts.length)]);
   
    return (
        <>
            <style>
                {
                    `
                    @keyframes marquee {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    .animated-text {
                        white-space: nowrap;
                        overflow: hidden;
                        animation: marquee 10s linear infinite;
                    }
                    `
                }
            </style>

            <div className='z-10 bg-black'>

            </div>

            <div className="fixed inset-0 flex items-center justify-center text-white z-20">
                <ParticleBackground></ParticleBackground>

                 <div className='z-30 flex flex-col'>
                    <div className="text-5xl font-bold text-center">
                        Fun Fact
                    </div>

                    <div className='mx-auto mt-10'>
                        <Typed
                            strings={[fact]}
                            typeSpeed={15}
                            backSpeed={30}
                            className=""
                        />
                    </div>
                    
                </div>
            </div>
        </>
     
    );
  };
  
  export default LoadingScreen;
  
