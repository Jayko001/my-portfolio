import ProjectCard from "../components/ProjectCard"
import Testimonials from "../components/Testimonials"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import research from "../assets/projects/research-1.png"
import cover from "../assets/projects/cover.jpg"
import ieee from "../assets/projects/IEEE-01.jpg"
import elevate from "../assets/projects/elevate.png"
import masterai from "../assets/projects/masterai.png"
import cv from "../assets/projects/cv.jpeg"
import center from "../assets/projects/center.webp"
import ff from "../assets/projects/ff.png"
import lc from "../assets/projects/lc.jpeg"

export default function Projects (){
    return (
        <>
            <Navbar></Navbar>
            <div className="">
                <h1 className="text-black font-tektur p-10 text-7xl">
                    My works
                </h1>
                <div className="flex items-strech md:flex-row flex-col flex-wrap justify-center"> 
                        <div className="basis-1/4 m-5 h-full flex-1">
                            <ProjectCard id={8} title="Cincinnati Ventures" subtitle="Jr. Software Developer" description="#WRITING" image={cv} />
                        </div>
                        <div className="basis-1/4 m-5 h-full flex-1">
                            <ProjectCard id={2} title="Master Ai" subtitle="Founder" description="#STARTUP #ML" image={masterai} />
                        </div>
                        <div className="basis-1/4 m-5 h-full flex-1">
                            <ProjectCard id={7} title="Center for Entrepreneurship" subtitle="Venture Catalyst" description="#WRITING" image={center} />
                        </div>
                       
                        <div className="basis-1/4 m-5  h-full flex-1">
                            <ProjectCard id={1} title="Video Summarization" subtitle="Research Assistant" description="#PYTHON #ML" image={research} />
                        </div>
   
                        <div className="basis-1/4 m-5  h-full flex-1">
                            <ProjectCard id={5} title="Navigating life as a Student and Aspriring Entrepreneur" subtitle="Author" description="#WRITING" image={cover} />
                        </div>
                        
                        <div className="basis-1/4 m-5 h-full flex-1">
                            <ProjectCard id={4} title="IEEE Publication" subtitle="Writer" description="#PYTHON #COMPUTERVISION" image={ieee} />
                        </div>

                        <div className="basis-1/4 m-5 h-full flex-1">
                            <ProjectCard id={6} title="Learning Commons" subtitle="Academic Coach" description="#WRITING" image={lc} />
                        </div>
    
                        <div className="basis-1/4 m-5 h-full flex-1">
                            <ProjectCard id={6} title="Fahrenheit Finance" subtitle="Intern" description="#WRITING" image={ff} />
                        </div>
                        <div className="basis-1/4 m-5 h-full flex-1">
                            <ProjectCard id={3} title="Elevate" subtitle="Co-Founder" description="#PYTHON #COMPUTERVISION" image={elevate} />
                        </div>
                    </div>

                <Testimonials></Testimonials>
            </div>
            <Footer></Footer>
        </>
    )
}