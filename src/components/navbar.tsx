import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="my-16 animate-fade-in text-zinc-500">
            <ul>
                <Link to="/about">
                    <li className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
                        About me
                    </li>
                </Link>
                <Link to="/projects">
                    <li className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
                        Projects
                    </li>
                </Link>
                <Link to="/blog">
                    <li className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
                        Blog
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="inline-block px-4 py-2 mx-2 text-sm font-medium tracking-wider uppercase duration-1000 transform cursor-pointer hover:scale-110 hover:text-zinc-400">
                        Contact Me
                    </li>
                </Link>
            </ul>
		</nav>
    );
}
