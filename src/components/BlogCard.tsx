import React from "react";
import { Link } from "react-router-dom"

type Props = {
    id: number;
    title: string;
    description: string;
    date: string;
    link: string;
    image: string;
};

const BlogCard = ({id, title, description, date, link, image }: Props) => {
    return (
        <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg">
            <div>
                <img
                    className="object-cover w-full h-48 rounded-t-lg"
                    src= {image}
                    alt="Article"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
                <Link to={link} className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700"> Read </Link>
                <p className="text-sm font-medium text-gray-600">{date}</p>
            </div>
        </div>
    );
};

export default BlogCard;
