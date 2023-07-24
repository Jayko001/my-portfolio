//@ts-nocheck
import {Link} from "react-router-dom";

export default function CoolNavbar() {

    let interval = null;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function coolDisplay(event) {
        let iteration = 0;
            
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                return event.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
            }
            
            iteration += 1 / 3;
        }, 30);
    }

    window.onload = function() {
        document.querySelector("#nav-element-1").onmouseover = event => {  
            coolDisplay(event);
        } 
        document.querySelector("#nav-element-2").onmouseover = event => {  
            coolDisplay(event);
        } 
        document.querySelector("#nav-element-3").onmouseover = event => {  
            coolDisplay(event);
        } 
        document.querySelector("#nav-element-4").onmouseover = event => {  
            coolDisplay(event);
        }   
    } 

    return (
        <nav className="my-16 animate-fade-in font-tektur text-zinc-500">
            <ul>
                <Link to="/about">
                    <li id="nav-element-1" data-value="ABOUT ME" className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
                        About me
                    </li>
                </Link>
                <Link to="/projects">
                    <li id="nav-element-2" data-value="PROJECTS" className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
                        Projects
                    </li>
                </Link>
                <Link to="/blog">
                    <li id="nav-element-3" data-value="BLOG" className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
                        Blog
                    </li>
                </Link>
                <Link to="/contact">
                    <li id="nav-element-4" data-value="CONTACT ME" className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
                        Contact Me
                    </li>
                </Link>
            </ul>
		</nav>
    );
}
