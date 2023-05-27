import ParticleBackground from "./components/particles.jsx";
// import Particles from "react-tsparticles"; 
// import { loadFull } from "tsparticles"; 

function App() {
  return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
			<ParticleBackground />
			<nav className="my-16 animate-fade-in text-zinc-500">
				<ul>
					<li className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
						About me
					</li>
					<li className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
						Projects
					</li>
					<li className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
						Blog
					</li>
					<li className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
						Contact Me
					</li>
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Jay Kothari
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi, my name is Jay and i am awesome!
				</h2>
			</div>
		</div>
	);
}

export default App
