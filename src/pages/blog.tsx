import React from "react"
import BlogCard from "../components/BlogCard"

export default function Blog (){
    return (
        <>
            <h1> This is my blog </h1>
            <p> I will share my thoughts and ideas here</p>


            <BlogCard id={1} title="Why I am awesome" description="This is an article going over why I am awesome" date="24th April 2023" link={`/blog/${1}`} image='src/assets/logo.jpeg' />
            <BlogCard id={2} title="Why I am the best" description="This is an article going over why I am the best" date="30th April 2023" link={`/blog/${2}`} image='src/assets/test1.png' />

        </>
    )
}