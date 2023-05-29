//@ts-nocheck

import React, { useEffect } from 'react'

function About() {
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
      const numberOfItems = 5; // Or number of items you have in `.scene3D`
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
        <div className="scene3D-container">
          <div className="scene3D">
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="bg-white rounded-lg overflow-hidden shadow-lg relative">
                <img class="h-56 w-full object-cover" src="https://picsum.photos/700/700" alt="event"/>
                <div class="p-4 h-auto absolute bottom-0 bg-opacity-70 bg-gray-900 text-white">
                  <div class="block font-semibold mb-2 text-lg md:text-base lg:text-lg">Event 1</div>
                  <div class="font-semibold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="bg-white rounded-lg overflow-hidden shadow-lg relative">
                <img class="h-56 w-full object-cover" src="https://picsum.photos/700/700" alt="event"/>
                <div class="p-4 h-full w-full absolute top-0 flex items-center justify-center bg-opacity-70 bg-gray-900 text-white">
                  <div>
                    <div class="block font-semibold mb-2 text-lg md:text-base lg:text-lg">Event 1</div>
                    <div class="font-semibold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="bg-white rounded-lg overflow-hidden shadow-lg relative group">
                <img class="h-56 w-full object-cover" src="https://picsum.photos/700/700" alt="event"/>
                <div class="p-4 h-full w-full absolute top-0 flex items-center justify-center bg-opacity-70 bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                  <div>
                    <div class="block font-semibold mb-2 text-lg md:text-base lg:text-lg">Event 1</div>
                    <div class="font-semibold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-blue-100'>
              <img src="https://picsum.photos/700/700" alt="test" className="absolute"/>
            </div>
            <div className='bg-blue-100'>
              <img src="https://picsum.photos/700/700" alt="test" className="absolute"/>
            </div>
          </div>
        </div>
      </div>
        </>  
    );
}

export default About;