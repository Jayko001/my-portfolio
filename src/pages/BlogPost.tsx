import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
// import { blogs } from "../data/blogs";

import Blog1 from "../data/blog1"
import Blog2 from "../data/blog2"
import Blog3 from "../data/blog3";
import Blog4 from "../data/blog4";

const blogs = [<Blog1></Blog1>, <Blog2></Blog2>, <Blog3></Blog3>, <Blog4></Blog4>]

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    // const blogPost = blogs.find(blog => blog.id === Number(id));
    const blogPost = blogs[Number(id)-1];

    if (!blogPost) {
        return <div>Blog post not found</div>;
    }

    return (
        <div>
            <Navbar></Navbar>
            {blogPost}
        </div>
    );
};

export default BlogPost;
