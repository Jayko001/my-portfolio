// import React from "react"
import BlogCard from "../components/BlogCard"
import blog1 from "../assets/logo.jpeg"
import blog2 from "../assets/test1.png"

export default function Blog (){
    return (
        <>
            <div className="bg-black">
                <div className=" m-10 mr-10 h-72 rounded-[24px] bg-gradient-to-r from-yellow-500 to-amber-500">
                    <div className="flex flex-row relative">
                        <div className="text-7xl text-white absolute left-10 top-36">
                            Jay Kothari -
                        </div>
                        <div className="absolute end-10 top-32">
                            <img src="https://github.com/Jayko001.png" className="w-32 rounded-full"/>
                        </div>
                        
                    </div>
                </div>

                <div className="flex md:flex-row flex-col"> 
                    <div className="basis-1/3 m-5">
                        <BlogCard id={1} title="Why I am awesome" description="This is an article going over why I am awesome" date="24th April 2023" link={`/blog/${1}`} image={blog1} />
                    </div>
                    <div className="basis-1/3 m-5">
                        <BlogCard id={2} title="Why I am the best" description="This is an article going over why I am the best" date="30th April 2023" link={`/blog/${2}`} image={blog2} />
                    </div>
                </div>
            </div>
        </>
    )
}