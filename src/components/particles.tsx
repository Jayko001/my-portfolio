import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 

const ParticleBackground = () => {
    const particlesInit = async (main) => { 
		console.log(main); 
		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
		// starting from v2 you can add only the features you need reducing the bundle size 
		await loadFull(main); 
		}; 
		const particlesLoaded = (container) => { 
			console.log(container); 
		}; 
    return (
        <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{ 
          background: { 
            color: "rgb(10,10,25)", 
          }, 
          fpsLimit: 60, 
          particles: { 
            shape: { 
              type: "circle", 
            }, 
            size: { 
              random: { 
                enable: true, 
                minimumValue: 0.5, 
              }, 
              value: 0.5, 
            }, 
            color: { 
              value: "#f1f1f1", 
            }, 
            number: { 
              density: { 
                enable: true, 
                area: 1080, 
              }, 
              limit: 0, 
              value: 400, 
            }, 
            opacity: { 
              animation: { 
                enable: true, 
                minimumValue: 0.5, 
                speed: 1.6, 
                sync: false, 
              }, 
              random: { 
                enable: true, 
                minimumValue: 0.1, 
              }, 
              value: 1, 
            }, 
            "move": {
                "enable": true,
                "speed": 0.3,
                "random": true,
                "direction": "right",
              },
            interactivity: { 
              detectsOn: "canvas", 
              events: { 
                resize: true, 
              }, 
            }, 
          }, 
        }} 
      /> 
	);
};

export default ParticleBackground;