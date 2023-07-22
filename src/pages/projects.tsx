import ProjectCard from "../components/ProjectCard"
import Testimonials from "../components/Testimonials"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import research from "../assets/projects/research-1.png"
import cover from "../assets/projects/cover.jpg"
import blog1 from "../assets/logo.jpeg"
import blog2 from "../assets/test1.png"

export default function Projects (){
    return (
        <>
            <Navbar></Navbar>
            <div className="">
                <h1 className="text-white text-7xl">
                    My works
                </h1>
                <div className="flex md:flex-row flex-col flex-wrap justify-center"> 
                        <div className="basis-1/4 m-5">
                            <ProjectCard id={1} title="Video Summarization" description="#PYTHON #ML" image={research} />
                        </div>
                        <div className="basis-1/4 m-5">
                            <ProjectCard id={2} title="Master Ai" description="#STARTUP #ML" image={blog2} />
                        </div>
                        <div className="basis-1/4 m-5">
                            <ProjectCard id={3} title="Elevate" description="#PYTHON #COMPUTERVISION" image={blog2} />
                        </div>
                        <div className="basis-1/4 m-5">
                            <ProjectCard id={4} title="IEEE Publication" description="#PYTHON #COMPUTERVISION" image={blog1} />
                        </div>
                        <div className="basis-1/4 m-5">
                            <ProjectCard id={5} title="Author" description="#WRITING" image={cover} />
                        </div>
                    </div>

                <Testimonials></Testimonials>
            </div>
            <Footer></Footer>
        </>
    )
}