import Tilt from 'react-parallax-tilt';
type Props = {
    id: number;
    title: string;
    description: string;
    image: string;
};

const ProjectCard = ({id, title, description, image }: Props) => {
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

                <div className="inner element flex flex-col bg-white text-black p-4 shadow-lg border-gray-500 border-2">
                    <div>
                        <h3 className="text-xl font-semibold pt-2 pb-2">{title}</h3>
                        <div className="">
                            <img
                                className="h-40 rounded-t-lg inner-element"
                                src= {image}
                                alt="Article"
                            />
                        </div>
                    
                        <p className="mt-2 text-gray-300">{description} {id}</p>
                    </div>
                </div>     

                </Tilt>
                           
        </>
    
    );
};

export default ProjectCard;