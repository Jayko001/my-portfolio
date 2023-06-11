import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    const blogPost = blogs.find(blog => blog.id === Number(id));

    if (!blogPost) {
        return <div>Blog post not found</div>;
    }

    return (
        <div>
            <h1>{blogPost.title}</h1>
            <ReactMarkdown>{blogPost.content}</ReactMarkdown>
            <p>{blogPost.date}</p>
        </div>
    );
};

export default BlogPost;
