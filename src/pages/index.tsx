import ParticleBackground from "../components/particles.tsx";
import Navbar from "../components/navbar.tsx";

const Home = () => {
  return (
    <>
        <div className="bg-black flex flex-col items-center justify-center w-screen h-screen">
        <ParticleBackground />
		<Navbar />
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
    </>  
    );
};

export default Home;