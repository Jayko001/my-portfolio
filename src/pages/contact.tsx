import React, { useEffect } from 'react';
import Navbar from '../components/navbar';

const ContactMe: React.FC = () => {

  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const enhance = (id: string) => {
    const element = document.getElementById(id),
          text = element?.innerText.split("");
    
    element!.innerText = "";
    
    text!.forEach((value, index) => {
      const outer = document.createElement("span");
      
      outer.className = "outer";
      
      const inner = document.createElement("span");
      
      inner.className = "inner";
      
      inner.style.animationDelay = `${rand(-5000, 0)}ms`;
      
      const letter = document.createElement("span");
      
      letter.className = "letter";
      
      letter.innerText = value;
      
      letter.style.animationDelay = `${index * 1000 }ms`;
      
      inner.appendChild(letter);    
      
      outer.appendChild(inner);    
      
      element!.appendChild(outer);
    });
  }

  useEffect(() => {
    enhance("channel-link");
  }, []);

  return (
    <>
    <style>
        {
          `:root {  
            --green: rgb(42, 252, 152);
            --blue: rgb(41, 121, 255);
          }
          
          @keyframes float {
            from, to {
              transform: translateY(-0%);
            }
            
            50% {    
              transform: translateY(-3%);
            }
          }
          
          @keyframes background-pan {
            from {
              background-position: 1000% center;
            }
            
            to {
              background-position: 0% center;
            }
          }
          
          body {
            height: 100vh;
            background-color: black;
            margin: 0rem;
            overflow: hidden;
            display: grid;
            place-items: center;
          }
          
          .line {
            display: flex;
            justify-content: space-between;
          }
          
          .word {
            color: white;
            font-size: clamp(2rem, 8vw, 10rem);
            font-family: "Rubik", sans-serif;
            margin: 0rem;
            text-transform: uppercase;
            transition: opacity 250ms ease;
          }
          
          a {
            text-decoration: none;
          }
          
          #text:has(.fancy:hover) .word:not(.fancy:hover) {
            opacity: 0.2;
          }
          
          .fancy span {
            display: inline-block;
          }
          
          .fancy > .outer {
            transition: transform 350ms ease;
          }
          
          .fancy:hover > .outer {
            transition-duration: 800ms;
          }
          
          .fancy:hover > .outer > .inner {
            animation: float 5s ease infinite;
          }
          
          .fancy:hover > .outer > .inner > .letter {
            background: linear-gradient(
              to right,
              var(--blue),
              var(--green),
              var(--blue)
            );
            background-size: 1000%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: background-pan 150s linear infinite;
          }
          
          .fancy:hover > .outer:nth-child(1) {
            transform: translate(-80%, 60%) rotate(8deg);
          }
          
          .fancy:hover > .outer:nth-child(2) {
            transform: translate(-40%, 20%) rotate(4deg);
          }
          
          .fancy:hover > .outer:nth-child(3) {
            transform: translate(-10%, 60%) rotate(-6deg);
          }
          
          .fancy:hover > .outer:nth-child(4) {
            transform: translate(0%, 8%) rotate(-8deg);
          }
          
          .fancy:hover > .outer:nth-child(5) {
            transform: translate(0%, -20%) rotate(5deg);
          }
          
          .fancy:hover > .outer:nth-child(6) {
            transform: translate(0%, 20%) rotate(-3deg);
          }
          
          .fancy:hover > .outer:nth-child(7) {
            transform: translate(0%, -40%) rotate(-5deg);
          }
          
          .fancy:hover > .outer:nth-child(8) {
            transform: translate(0%, 15%) rotate(10deg);
          }
          
          .fancy:hover > .outer:nth-child(9) {
            transform: translate(0%, -50%) rotate(8deg);
          }
          
          .fancy:hover > .outer:nth-child(10) {
            transform: translate(0%, 15%) rotate(-6deg);
          }
          
          .fancy:hover > .outer:nth-child(11) {
            transform: translate(50%, -10%) rotate(-3deg);
          }
          
          .fancy:hover > .outer:nth-child(12) {
            transform: translate(120%, -30%) rotate(-10deg);
          }
          
          `
        }
      </style>
      <div className=' absolute top-0 left-0 w-full'>
        <Navbar />
      </div>
      <div id="text">
        <div className="line">
          <p className="word">A</p>
          <p className="word">Person</p>
        </div>

        <div className="line">
          <p className="word">Blog</p>
          <p className="word">&</p>
        </div>

        <div className="line">
          <p className="word">student</p>
        </div>
        
        <div className='line'>
          <a href='src/assets/testfile.pdf' className='word fancy' download> RESUME </a>
        </div>

        <div className="line">
          <a 
            id="channel-link" 
            href="https://jayko.me" 
            target="_blank" 
            className="word fancy"
          >
            @Jay Kothari
          </a>
          
        </div>
      </div>
    </>
   
  );
};

export default ContactMe;
