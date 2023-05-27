import {Route, Routes } from "react-router-dom";

import ParticleBackground from "./components/particles.tsx";
import Navbar from "./components/navbar.tsx";
import Home from "./pages/index.tsx";
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";
import Blog from "./pages/blog.tsx";
import Contact from "./pages/contact.tsx";

function App() {
  return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
			<ParticleBackground />
			<Navbar />
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
