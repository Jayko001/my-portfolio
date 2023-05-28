import {Route, Routes } from "react-router-dom";

import Home from "./pages/index.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import About from "./pages/about.js";
import Projects from "./pages/projects.tsx";
import Blog from "./pages/blog.tsx";
import Contact from "./pages/contact.tsx";

function App() {
  return (
		<div className="">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App
