import ParticleBackground from "../components/particles.tsx";
import CoolNavbar from "../components/CoolNavbar.tsx";

const Home = () => {
    return (
        <>
            <style>
            {`   
                @keyframes background-pan {
                    from {
                    background-position: 0% center;
                    }
                    to {
                    background-position: -200% center;
                    }
                }
                
                #fancy-text {
                    animation: background-pan 3s linear infinite;
                    background-size: 200%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    white-space: nowrap;
                  }
            `}
            </style>
            <div className="bg-black flex flex-col items-center justify-center w-screen h-screen">
            <ParticleBackground />
            <CoolNavbar />
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <h1 className="z-10 font-tektur text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                Jay Kothari
            </h1>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 flex flex-col ">
                    <span>
                        Student at <span id="fancy-text" className="bg-gradient-to-r from-purple-500 from-25% via-fuchsia-500 via-50% via-violet-500 via-75% to-purple-500"> Unviveristy of Cincinnati </span>
                    </span>
                    <span>
                        Jr. Software Developer at <span id="fancy-text" className="bg-gradient-to-r from-purple-500 from-25% via-fuchsia-500 via-50% via-violet-500 via-75% to-purple-500"><a href="https://tembo.io/"> Tembo </a></span>
                    </span>
                    <span>
                        Managing Partner at <span id="fancy-text" className="bg-gradient-to-r from-purple-500 from-25% via-fuchsia-500 via-50% via-violet-500 via-75% to-purple-500"><a href="https://www.bearcatventures.org/">Bearcat Ventures</a> </span>
                    </span>
                    <span>
                        Venture Catalyst at <span id="fancy-text" className="bg-gradient-to-r from-purple-500 from-25% via-fuchsia-500 via-50% via-violet-500 via-75% to-purple-500"> UC Center for Entrepreneurship </span>
                    </span>
                </h2>
            </div>

            </div>
        </>  
    );
};

export default Home;