//@ts-nocheck

// learn about useRef hoook
// blur all elements
// unblur the first div
// as soon as the the first element gets out of the viewport, unblur the next element

import React, { useEffect, useRef } from 'react'
import ParticleBackground from '../components/particles';

import one from '../assets/about/1.jpeg'
import two from '../assets/about/2.jpeg'
import three from '../assets/about/3.jpeg'
import four from '../assets/about/4.jpeg'
import five from '../assets/about/5.jpeg'
import six from '../assets/about/6.jpeg'
import seven from '../assets/about/7.jpeg'
import eight from '../assets/about/8.jpeg'
import nine from '../assets/about/9.jpeg'
import ten from '../assets/about/10.jpeg'
import oneone from '../assets/about/11.jpeg'
import onetwo from '../assets/about/12.jpeg'
import onethree from '../assets/about/13.jpeg'
import onefour from '../assets/about/14.jpeg'
import onefive from '../assets/about/15.jpeg'
import onesix from '../assets/about/16.jpeg'
import oneseven from '../assets/about/17.jpeg'
import oneeight from '../assets/about/18.jpeg'
import onenine from '../assets/about/19.jpeg'
import twozero from '../assets/about/20.jpeg'
import twoone from '../assets/about/21.png'
import twotwo from '../assets/about/22.png'
import twothree from '../assets/about/23.jpeg'
import twofour from '../assets/about/24.png'
import twofive from '../assets/about/25.png'
import twosix from '../assets/about/26.png'
import twoseven from '../assets/about/27.png'
import twoeight from '../assets/about/28.png'

function About() {
  const myItemRef = useRef();

  const EventCard = ({ imgSrc, imgAlt, title, subtitle }) => (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
            <img className=" object-cover" src={imgSrc} alt={imgAlt || 'event'} />
            <div className="p-4 h-auto absolute bottom-0 bg-opacity-70 bg-gray-900 text-white">
                <div className="block font-semibold mb-2 text-lg md:text-base lg:text-lg">{title}</div>
                <div className="font-semibold text-sm">{subtitle}</div>
            </div>
        </div>
    </div>
  );
  

  useEffect(() => {
    const perspectiveOrigin = {
      x: parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--scenePerspectiveOriginX"
        )
      ),
      y: parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--scenePerspectiveOriginY"
        )
      ),
      maxGap: 10
    };

    const target = myItemRef.current;

    // Initialize a new Intersection Observer
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     // You can adjust the blur effect based on how much of the element is visible
    //     // entry.intersectionRatio gives a value between 0 and 1, indicating how much of the element is visible
    //     // In this case, when the element is fully visible, intersectionRatio is 1, so blur will be 0
    //     // and when the element is not visible at all, intersectionRatio is 0, so blur will be maximum (say 10px)
    //     const blurValue = (1 - entry.intersectionRatio) * 5;
    //     target.style.filter = `blur(${blurValue}px)`;
    //   });
    // }, {
    //   threshold: [0, 0.25, 0.5, 0.75, 1] // Adjust these values as needed to change when the callback is invoked
    // });

    // Start observing the target element
    if (target) {
      observer.observe(target);
    }

    window.addEventListener("scroll", moveCamera);
    window.addEventListener("mousemove", moveCameraAngle);
    setSceneHeight();

    function moveCameraAngle(event) {
      const xGap =
        (((event.clientX - window.innerWidth / 2) * 100) /
          (window.innerWidth / 2)) *
        -1;
      const yGap =
        (((event.clientY - window.innerHeight / 2) * 100) /
          (window.innerHeight / 2)) *
        -1;
      const newPerspectiveOriginX =
        perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
      const newPerspectiveOriginY =
        perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;

      document.documentElement.style.setProperty(
        "--scenePerspectiveOriginX",
        newPerspectiveOriginX
      );
      document.documentElement.style.setProperty(
        "--scenePerspectiveOriginY",
        newPerspectiveOriginY
      );
    }

    function moveCamera() {
      document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
    }

    function setSceneHeight() {
      const numberOfItems = 30; // Or number of items you have in `.scene3D`
      const itemZ = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
      );

      const scenePerspective = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--scenePerspective"
        )
      );
      const cameraSpeed = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
      );

      const height =
        window.innerHeight +
        scenePerspective * cameraSpeed +
        itemZ * cameraSpeed * numberOfItems;

      // Update --viewportHeight value
      document.documentElement.style.setProperty("--viewportHeight", height);
    }

    // Cleanup function: remove the event listeners when the component is unmounted
    return () => {
      window.removeEventListener("scroll", moveCamera);
      window.removeEventListener("mousemove", moveCameraAngle);
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []); // Empty dependency array: this useEffect will run once after the component is mounted

    return (
    <>
        <style>
        {
          `@import url("https://fonts.googleapis.com/css?family=Playfair+Display+SC:900");
          :root {
            --scenePerspective: 1;
            --scenePerspectiveOriginX: 50;
            --scenePerspectiveOriginY: 30;
            --itemZ: 2;
            --cameraSpeed: 150;
            --cameraZ: 0;
            --viewportHeight: 0;
          }
          
          .viewport {
            height: calc(var(--viewportHeight) * 1px);
          }
          .viewport .scene3D-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            perspective: calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);
            perspective-origin: calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);
            will-change: perspective-origin;
            transform: translate3d(0, 0, 0);
          }
          .viewport .scene3D-container .scene3D {
            position: absolute;
            top: 0;
            height: 100vh;
            width: 100%;
            transform-style: preserve-3d;
            transform: translateZ(calc(var(--cameraZ) * 1px));
            will-change: transform;
          }
          .viewport .scene3D-container .scene3D > div {
            position: absolute;
            display: block;
            width: 100%;
            top: 40%;
          }
          @media only screen and (min-width: 600px) {
            .viewport .scene3D-container .scene3D > div {
              width: 45%;
            }
          }
          .viewport .scene3D-container .scene3D > div:nth-child(2n) {
            left: 0;
          }
          .viewport .scene3D-container .scene3D > div:nth-child(2n+1) {
            right: 0;
          }

          .viewport .scene3D-container .scene3D > div:nth-child(0) {
            transform: translate3D(4%, -15%, calc(var(--itemZ) * var(--cameraSpeed) * 0 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(1) {
            transform: translate3D(6%, 1%, calc(var(--itemZ) * var(--cameraSpeed) * 1 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(2) {
            transform: translate3D(-13%, -13%, calc(var(--itemZ) * var(--cameraSpeed) * 2 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(3) {
            transform: translate3D(22%, -15%, calc(var(--itemZ) * var(--cameraSpeed) * 3 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(4) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 4 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(5) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 5 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(6) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 6 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(7) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 7 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(8) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 8 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(9) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 9 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(10) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 10 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(11) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 11 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(12) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 12 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(13) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 13 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(14) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 14 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(15) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 15 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(16) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 16 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(17) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 17 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(18) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 18 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(19) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 19 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(20) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 20 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(21) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 21 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(22) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 22 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(23) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 23 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(24) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 24 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(25) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 25 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(26) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 26 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(27) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 27 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(28) {
            transform: translate3D(-20%, -31%, calc(var(--itemZ) * var(--cameraSpeed) * 28 * -1px));
          }
          
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          
          body {
            background-color: #272935;
            color: #272935;
            padding: 0;
            margin: 0;
          }
          
          h1 {
            font-family: "Playfair Display SC", serif;
            font-size: 1.5rem;
            color: white;
            margin: 0;
            position: fixed;
            bottom: 1rem;
            left: 1rem;
            text-align: center;
          }
          h1 .logo {
            display: block;
            margin: 0 auto;
            max-width: 150px;
          }
          
          .link {
            color: white;
            margin: 0;
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 1;
          }
          
          .scene3D > div h2 {
            margin-top: 0;
            font-family: "Playfair Display SC", serif;
            font-size: 1.5rem;
          }
          `
        }
      </style>
      <div className="viewport">
        <ParticleBackground/>
        <div className="scene3D-container">
          <div className="scene3D">
            <EventCard imgSrc={one} title="Independence" subtitle="Beginning of an adventure" />
            <EventCard imgSrc={two} title="Freedom" subtitle="Set foot on the land of opportunities" />
            <EventCard imgSrc={three} title="Love at first sight" subtitle="Fell in love with Cincy" />
            <EventCard imgSrc={four} title="Redefining 'Football'" subtitle="Soccer? Is that even a thing?" />
            <EventCard imgSrc={five} title="Friendship" subtitle="Do I need to explain this too?" />
            <EventCard imgSrc={six} title="1 step" subtitle="Journey of a thousand miles begins with 1 step (pedal?)" />
            <EventCard imgSrc={seven} title="Entrepreneurship 101" subtitle="Finally starting to bleed the business blood" />
            <EventCard imgSrc={eight} title="New world" subtitle="Discovered a new Capitalistic Fairy Land" />
            <EventCard imgSrc={nine} title="Snow White" subtitle="Found my new favorite season" />
            <EventCard imgSrc={ten} title="Payday" subtitle="My first job, working with the best" />
            <EventCard imgSrc={oneone} title="Business Trip" subtitle="First of many" />
            <EventCard imgSrc={onetwo} title="Big Screen" subtitle="There is nothing for me to say, you gotta see it" />
            <EventCard imgSrc={onethree} title="Fahrenheit Finance" subtitle="A new entity is born" />
            <EventCard imgSrc={onefour} title="30th April, 2022" subtitle="A date to remember" />
            <EventCard imgSrc={onefive} title="The advent of Code" subtitle="Getting paid to sit and type. Awesome, isnt it?" />
            <EventCard imgSrc={onesix} title="Business Model" subtitle="Didnt work out, but hey, its a start" />
            <EventCard imgSrc={oneseven} title="Certificates" subtitle="Got to get a proof for working 60 hours a week" />
            <EventCard imgSrc={oneeight} title="Waffle House" subtitle="Discussing business at Waffle House. Have you ever done that before?" />
            <EventCard imgSrc={onenine} title="Smokies" subtitle="The 'Perfect' view. Period. " />
            <EventCard imgSrc={twozero} title="Silicon Valley" subtitle="Where the software bro's belong " />
            <EventCard imgSrc={twoone} title="Payday 2.0" subtitle="Alright, now we are talking ( and coding )!" />
            <EventCard imgSrc={twotwo} title="MasterAi is born" subtitle="You'll hear the rest of the story on the news" />
            <EventCard imgSrc={twothree} title="A team" subtitle="VC 101: Choose an A team over anything else" />
            <EventCard imgSrc={twofour} title="A new hobby" subtitle="A software developer welding. There is nothing wrong with that. Right?" />
            <EventCard imgSrc={twofive} title="Big Fat Check" subtitle="Winner! Winner! Paneer Dinner!" />
            <EventCard imgSrc={twosix} title="Last Day" subtitle="I'll be back soon. I Promise." />
            <EventCard imgSrc={twoseven} title="Baseball" subtitle="They should have beds at the stadium. I hope you know why." />
            <EventCard imgSrc={twoeight} title="Jay" subtitle="Just a photo of me to end the slidshow (if you could call it that )" />
            {/* <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg relative group">
                <img className="h-56 w-full object-cover" src="https://picsum.photos/700/700" alt="event"/>
                <div className="p-4 h-full w-full absolute top-0 flex items-center justify-center bg-opacity-70 bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                  <div>
                    <div className="block font-semibold mb-2 text-lg md:text-base lg:text-lg">Event 1</div>
                    <div className="font-semibold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
        </>  
    );
}

export default About;