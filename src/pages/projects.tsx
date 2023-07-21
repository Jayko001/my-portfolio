import ProjectCard from "../components/ProjectCard"

import blog1 from "../assets/logo.jpeg"
import blog2 from "../assets/test1.png"

export default function Projects (){
    return (
        <div className="bg-black">
            <h1 className="text-white text-7xl">
                My works
            </h1>
            <div className="flex md:flex-row flex-col"> 
                    <div className="basis-1/4 m-5">
                        <ProjectCard id={1} title="Video Summarization" description="#PYTHON #ML" image={blog1} />
                    </div>
                    <div className="basis-1/4 m-5">
                        <ProjectCard id={2} title="Master Ai" description="#STARTUP #ML" image={blog2} />
                    </div>
                </div>

        </div>

    )
}