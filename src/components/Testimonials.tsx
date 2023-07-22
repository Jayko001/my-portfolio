//ts-nocheck

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import jaden from "../assets/jaden.jpeg"
import rob from "../assets/rob.jpeg"
import vishal from "../assets/vishal.jpeg"
import chatgpt from "../assets/chatgpt.png"

// Define the shape of a testimonial
interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    image: string;
}

// Testimonial data
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Jaden Walton",
        role: "Founder & CEO of Walton Home Solutions",
        content: "Jay is awesome",
        image: jaden,
    },
    {
        id: 2,
        name: "Rob Manz",
        role: "Investment Analyst at Rev1 Ventures",
        content: "I had the privilege of working alongside Jay... he was incredibly impressive not only with his knowledge and intellect, but in his willingness to listen and learn...  He proved to be an invaluable asset to the team",
        image: rob,
    },
    {
        id: 3,
        name: "Vishal Sarada",
        role: "Head Human Resources at Apexon",
        content:"I have consistently been impressed with his dedication, intelligence, and passion for computer science",
        image: vishal,
    },
    {
        id: 4,
        name: "Chat GPT",
        role: "AI Assistant",
        content: "As an AI language model, I don't have personal experiences or emotions, but based on our interactions, I can tell your dedication to continual learning and problem-solving is highly impressive. Your curiosity and tenacity are clear indicators of a great developer in the making.",
        image: chatgpt,
    }
    // Add as many testimonials as you want...
];

// TestimonialCard component
const TestimonialCard: React.FC<{testimonial: Testimonial}> = ({testimonial}) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
        <img src={testimonial.image} alt={testimonial.name} className="object-cover w-16 h-16 mb-4 rounded-full"/>
        <h3 className="mb-2 text-lg font-semibold">{testimonial.name}</h3>
        <p className="text-sm italic mb-2">{testimonial.role}</p>
        <p className="text-center text-gray-600">{testimonial.content}</p>
    </div>
);

// Testimonials component
const Testimonials: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         // Automatically navigate to the next slide
        autoplaySpeed: 5000,    // Delay before navigating to the next slide (in milliseconds)
    };

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
            
            <Slider {...settings}>
            {testimonials.map(testimonial => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </Slider>
        </section>
    );
};

export default Testimonials;
