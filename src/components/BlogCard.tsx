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
        <div className="flex flex-col bg-black text-white p-4 rounded-[24px] shadow-lg border-white border-2">
            <div>
                <div className="overflow-hidden">
                    <img
                        className="object-cover w-full h-48 rounded-t-lg hover:scale-110 transition duration-500 cursor-pointer"
                        src= {image}
                        alt="Article"
                    />
                </div>
                <h3 className="text-2xl font-semibold font-tektur pt-2 pb-2">{title}</h3>
                <hr className="h-1 bg-black pb-2"/>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
                <Link to={link} className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700"> Read </Link>
                <p className="text-sm font-medium text-gray-500">{date} {id}</p>
            </div>
        </div>
    );
};

export default BlogCard;
