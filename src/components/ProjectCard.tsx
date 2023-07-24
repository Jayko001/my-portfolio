import Tilt from 'react-parallax-tilt';
type Props = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
};

const ProjectCard = ({id, title, subtitle, description, image }: Props) => {
    return (
        <>

            <style>
                {
                    `
                    .parallax-effect-img {
                        transform-style: preserve-3d;
                        transform: perspective(1000px);
                    }
                    .inner-element {
                        transform: translateZ(400px);
                    }
                    `
                }
            </style>
            <Tilt  className="parallax-effect-img"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                 >
                <div className="flex h-full items-strech flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 
                hover:transition-all duration-300 ease-out hover:ease-in hover:animate-shine text-black p-4 shadow-lg border-gray-500 border-2 w-92">
                    <div>
                        <h3 className="text-2xl font-tektur font-semibold pt-2 pb-1">{title}</h3>
                        <h3 className="text-lg font-tektur pb-3">{subtitle}</h3>
                        <div className="inner-element">
                            <img
                                className="h-40 rounded-t-lg hover:drop-shadow-xl bg-white"
                                src= {image}
                                alt="Article"
                            />
                        </div>
                        <p className="mt-2 text-white">{description} {id}</p>
                    </div>
                </div>     
                </Tilt>
                           
        </>
    
    );
};

export default ProjectCard;