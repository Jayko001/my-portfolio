//@ts-nocheck

import React, { useEffect, useRef } from 'react'
import ParticleBackground from '../components/particles';
import styles from '../assets/styles/About.module.css';

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

  const EventCard = ({ imgSrc, imgAlt, title, subtitle, date }) => (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
            <img className="object-cover" src={imgSrc} alt={imgAlt || 'event'} />
            <div className="p-4 h-auto absolute bottom-0 bg-opacity-70 bg-gray-900 text-white">
                <div className="block font-semibold mb-2 text-lg md:text-base lg:text-lg">{title}</div>
                <div className="font-semibold text-sm">{subtitle}</div>
                {date && <div className="font-light text-sm">{date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</div>}
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
      const numberOfItems = 27; // Or number of items you have in `.scene3D`
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
      <h1 className='relative mt-10 text-white z-10'> Scroll to see the Magic! </h1>
      <div className={styles.viewport} >
          <ParticleBackground/>
          <div className={styles['scene3D-container']}>
            <div className={styles.scene3D}>
              <EventCard imgSrc={one} title="Independence" subtitle="Beginning of an adventure" date={new Date(2021,7,15)}/>
              <EventCard imgSrc={two} title="Freedom" subtitle="Set foot on the land of opportunities" date={new Date(2021, 7,16)}/>
              <EventCard imgSrc={three} title="Love at first sight" subtitle="Fell in love with Cincy" date={new Date(2021, 7, 28)}/>
              <EventCard imgSrc={four} title="Redefining 'Football'" subtitle="Soccer? Is that even a thing?" date={new Date(2021, 8, 4)} />
              <EventCard imgSrc={five} title="Friendship" subtitle="Do I need to explain this too?" date={new Date(2021, 9, 1)}/>
              <EventCard imgSrc={six} title="1 step" subtitle="Journey of a thousand miles begins with 1 step (pedal?)" date={new Date(2021, 9, 26)}/>
              <EventCard imgSrc={seven} title="Entrepreneurship 101" subtitle="Finally starting to bleed the business blood" date={new Date(2021,9,29)} />
              <EventCard imgSrc={eight} title="New world" subtitle="Discovered a new Capitalistic Fairy Land" date={new Date(2021, 10, 10)}/>
              <EventCard imgSrc={nine} title="Snow White" subtitle="Found my new favorite season" date={new Date(2021, 10, 27)}/>
              <EventCard imgSrc={ten} title="Payday" subtitle="My first job, working with the best" date={new Date(2021, 11, 6)}/>
              <EventCard imgSrc={oneone} title="Business Trip" subtitle="First of many" date={new Date(2022, 1, 4)}/>
              <EventCard imgSrc={onetwo} title="Big Screen" subtitle="There is nothing for me to say, you gotta see it" date={new Date(2022, 2, 3)}/>
              <EventCard imgSrc={onethree} title="Fahrenheit Finance" subtitle="A new entity is born" date={new Date(2022, 3, 7)}/>
              {/* <EventCard imgSrc={onefour} title="30th April, 2022" subtitle="A date to remember" date={new Date(2021, 10, 1)}/> */}
              <EventCard imgSrc={onefive} title="The advent of Code" subtitle="Getting paid to sit and type. Awesome, isnt it?" date={new Date(2022, 4, 22)}/>
              <EventCard imgSrc={onesix} title="Business Model" subtitle="Didnt work out, but hey, its a start" date={new Date(2022, 5, 25)}/>
              <EventCard imgSrc={oneseven} title="Certificates" subtitle="Got to get a proof for working 60 hours a week" date={new Date(2022, 6, 28)}/>
              <EventCard imgSrc={oneeight} title="Waffle House" subtitle="Discussing business at Waffle House. Have you ever done that before?" date={new Date(2022, 7, 28)}/>
              <EventCard imgSrc={onenine} title="Smokies" subtitle="The 'Perfect' view. Period. " date={new Date(2022, 9, 8)}/>
              <EventCard imgSrc={twozero} title="Silicon Valley" subtitle="Where the software bros belong " date={new Date(2022, 9, 16)}/>
              <EventCard imgSrc={twoone} title="Payday 2.0" subtitle="Alright, now we are talking ( and coding )!" date={new Date(2023, 0, 10)}/>
              <EventCard imgSrc={twotwo} title="MasterAi is born" subtitle="You'll hear the rest of the story on the news" date={new Date(2023, 0, 29)}/>
              <EventCard imgSrc={twothree} title="A team" subtitle="VC 101: Choose an A team over anything else" date={new Date(2023, 1, 2)}/>
              <EventCard imgSrc={twofour} title="A new hobby" subtitle="A software developer welding. There is nothing wrong with that. Right?" date={new Date(2023, 2, 17)}/>
              <EventCard imgSrc={twofive} title="Big Fat Check" subtitle="Winner! Winner! Paneer Dinner!" date={new Date(2023, 3, 12)}/>
              <EventCard imgSrc={twosix} title="Last Day" subtitle="I'll be back soon. I Promise." date={new Date(2023, 3, 28)}/>
              {/* <EventCard imgSrc={twoseven} title="Baseball" subtitle="They should have beds at the stadium. I hope you know why." date={new Date(2021, 10, 1)}/> */}
              <EventCard imgSrc={twoeight} title="Jay" subtitle="Just a photo of me to end the slidshow (if you could call it that )" date={new Date(2003, 3, 24)}/>
            </div>
          </div>
      </div>
        </>  
    );
}

export default About;