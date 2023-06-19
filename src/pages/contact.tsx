import React, { useEffect } from 'react';
import '../assets/ContactMe.css';

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
  );
};

export default ContactMe;
