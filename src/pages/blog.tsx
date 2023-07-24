// import React from "react"
import { useState, useEffect } from "react";

import BlogCard from "../components/BlogCard";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import LoadingScreen from "../components/LoadingScreen";

// import blog1 from "../assets/logo.jpeg"
import blog2 from "../assets/blog2cover.png"
import blog3 from "../assets/blog3cover.jpeg"

export default function Blog (){

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide the loading screen after 2 seconds
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 3000);

        // Cleanup timer on unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className=" z-10">
                {isLoading ? <LoadingScreen /> : null}
                <Navbar></Navbar>
                <div className="m-10 mr-10 h-72 rounded-[24px] bg-gradient-to-r from-yellow-500 to-amber-500">
                    <div className="flex flex-row relative z-10">
                        <div className="absolute left-10 top-36">
                        <div className="md:text-7xl text-2xl font-tektur text-white ">
                            Jay Kothari -
                        </div>
                        <div className=" text-white relative pt-3">
                            Hello, this is my blog. I write about self-improvement, productivity, and more!
                        </div>
                        </div>
                        
                        <div className="absolute end-10 top-32">
                            <img src="https://github.com/Jayko001.png" className="md:w-32 w-20 rounded-full"/>
                        </div>

                    </div>
                </div>

                <div className="flex md:flex-row flex-col flex-wrap justify-center"> 
                    {/* <div className="basis-2/5 m-5">
                        <BlogCard id={1} title="Why I am awesome" description="This is an article going over why I am awesome" date="24th April 2023" link={`/blog/${1}`} image={blog1} />
                    </div> */}
                    <div className="basis-2/5 m-5">
                        <BlogCard id={2} title="1% Better" description="Unlock consistent self-improvement by striving to be 1% better every day" date="30th April 2023" link={`/blog/${2}`} image={blog2} />
                    </div>
                    <div className="basis-2/5 m-5">
                        <BlogCard id={3} title="The 5 second rule" description="Beat hesitation with the 5-second rule: A simple hack for daily decision-making!" date="30th April 2023" link={`/blog/${3}`} image={blog3} />
                    </div>
                    <div className="basis-2/5 m-5">
                        <BlogCard id={4} title="The Infinite loan" description="Beat hesitation with the 5-second rule: A simple hack for daily decision-making!" date="30th April 2023" link={`/blog/${4}`} image={"https://lh3.googleusercontent.com/-BxLeZ2kasL0/YLD5F9jfj5I/AAAAAAAAADc/ExloW4FWcSkkVJVk-X3JTdgaRnMGswEsACLcBGAsYHQ/image.png"} />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}