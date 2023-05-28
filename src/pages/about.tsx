//@ts-nocheck

import React from 'react'
import $ from 'jquery'

export default function About (){

  "use strict";
    const perspectiveOrigin = {
        x: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginX")),
        y: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginY")),
        maxGap: 10
    };
    $(function() {
      window.addEventListener("scroll", moveCamera);
      window.addEventListener("mousemove", moveCameraAngle);
      setSceneHeight();
    });
    function moveCameraAngle(event:any) {
        const xGap = (((event.clientX - window.innerWidth / 2) * 100) /
            (window.innerWidth / 2)) *
            -1;
        const yGap = (((event.clientY - window.innerHeight / 2) * 100) /
            (window.innerHeight / 2)) *
            -1;
        const newPerspectiveOriginX = perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
        const newPerspectiveOriginY = perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;
        document.documentElement.style.setProperty("--scenePerspectiveOriginX", newPerspectiveOriginX);
        document.documentElement.style.setProperty("--scenePerspectiveOriginY", newPerspectiveOriginY);
    }
    function moveCamera() {
        document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
    }
    function setSceneHeight() {
        const numberOfItems = 3; // Or number of items you have in `.scene3D`
        const itemZ = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ"));
        const scenePerspective = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective"));
        const cameraSpeed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"));
        const height = window.innerHeight +
            scenePerspective * cameraSpeed +
            itemZ * cameraSpeed * numberOfItems;
        // Update --viewportHeight value
        document.documentElement.style.setProperty("--viewportHeight", height);
    }
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
            transform: translate3D(8%, -12%, calc(var(--itemZ) * var(--cameraSpeed) * 5 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(6) {
            transform: translate3D(-13%, 26%, calc(var(--itemZ) * var(--cameraSpeed) * 6 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(7) {
            transform: translate3D(24%, 10%, calc(var(--itemZ) * var(--cameraSpeed) * 7 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(8) {
            transform: translate3D(-11%, 16%, calc(var(--itemZ) * var(--cameraSpeed) * 8 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(9) {
            transform: translate3D(-2%, 31%, calc(var(--itemZ) * var(--cameraSpeed) * 9 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(10) {
            transform: translate3D(-13%, -18%, calc(var(--itemZ) * var(--cameraSpeed) * 10 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(11) {
            transform: translate3D(-11%, 42%, calc(var(--itemZ) * var(--cameraSpeed) * 11 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(12) {
            transform: translate3D(10%, 32%, calc(var(--itemZ) * var(--cameraSpeed) * 12 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(13) {
            transform: translate3D(21%, -21%, calc(var(--itemZ) * var(--cameraSpeed) * 13 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(14) {
            transform: translate3D(13%, -33%, calc(var(--itemZ) * var(--cameraSpeed) * 14 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(15) {
            transform: translate3D(24%, -38%, calc(var(--itemZ) * var(--cameraSpeed) * 15 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(16) {
            transform: translate3D(9%, -14%, calc(var(--itemZ) * var(--cameraSpeed) * 16 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(17) {
            transform: translate3D(7%, 41%, calc(var(--itemZ) * var(--cameraSpeed) * 17 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(18) {
            transform: translate3D(-10%, -18%, calc(var(--itemZ) * var(--cameraSpeed) * 18 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(19) {
            transform: translate3D(24%, 20%, calc(var(--itemZ) * var(--cameraSpeed) * 19 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(20) {
            transform: translate3D(6%, 13%, calc(var(--itemZ) * var(--cameraSpeed) * 20 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(21) {
            transform: translate3D(-21%, -8%, calc(var(--itemZ) * var(--cameraSpeed) * 21 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(22) {
            transform: translate3D(15%, 9%, calc(var(--itemZ) * var(--cameraSpeed) * 22 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(23) {
            transform: translate3D(19%, -37%, calc(var(--itemZ) * var(--cameraSpeed) * 23 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(24) {
            transform: translate3D(24%, 45%, calc(var(--itemZ) * var(--cameraSpeed) * 24 * -1px));
          }
          .viewport .scene3D-container .scene3D > div:nth-child(25) {
            transform: translate3D(4%, -22%, calc(var(--itemZ) * var(--cameraSpeed) * 25 * -1px));
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
          
          .scene3D > div {
            padding: 2rem;
          }
          .scene3D > div h2 {
            margin-top: 0;
            font-family: "Playfair Display SC", serif;
            font-size: 1.5rem;
          }
          .scene3D > div:nth-child(0) {
            background-color: #ffc2e0;
          }
          .scene3D > div:nth-child(1) {
            background-color: #ffc2c2;
          }
          .scene3D > div:nth-child(2) {
            background-color: #ffe0c2;
          }
          .scene3D > div:nth-child(3) {
            background-color: #ffffc2;
          }
          .scene3D > div:nth-child(4) {
            background-color: #e0ffc2;
          }
          .scene3D > div:nth-child(5) {
            background-color: #c2ffc2;
          }
          .scene3D > div:nth-child(6) {
            background-color: #c2ffe0;
          }
          .scene3D > div:nth-child(7) {
            background-color: #c2ffff;
          }
          .scene3D > div:nth-child(8) {
            background-color: #c2e0ff;
          }
          .scene3D > div:nth-child(9) {
            background-color: #c2c2ff;
          }
          .scene3D > div:nth-child(10) {
            background-color: #e0c2ff;
          }
          .scene3D > div:nth-child(11) {
            background-color: #ffc2ff;
          }
          .scene3D > div:nth-child(12) {
            background-color: #ffc2e0;
          }
          .scene3D > div:nth-child(13) {
            background-color: #ffc2c2;
          }
          .scene3D > div:nth-child(14) {
            background-color: #ffe0c2;
          }
          .scene3D > div:nth-child(15) {
            background-color: #ffffc2;
          }
          .scene3D > div:nth-child(16) {
            background-color: #e0ffc2;
          }
          .scene3D > div:nth-child(17) {
            background-color: #c2ffc2;
          }
          .scene3D > div:nth-child(18) {
            background-color: #c2ffe0;
          }
          .scene3D > div:nth-child(19) {
            background-color: #c2ffff;
          }
          .scene3D > div:nth-child(20) {
            background-color: #c2e0ff;
          }
          .scene3D > div:nth-child(21) {
            background-color: #c2c2ff;
          }
          .scene3D > div:nth-child(22) {
            background-color: #e0c2ff;
          }
          .scene3D > div:nth-child(23) {
            background-color: #ffc2ff;
          }
          .scene3D > div:nth-child(24) {
            background-color: #ffc2e0;
          }
          .scene3D > div:nth-child(25) {
            background-color: #ffc2c2;
          }
          `
        }
      </style>
      <div className="viewport">
        <div className="scene3D-container">
          <div className="scene3D">
            <div>
              <h2>test</h2>
              <p>Year:</p>
              <p>Director: </p>
              <p>description</p>
            </div>
            <div>
              <h2>test</h2>
              <p>Year:</p>
              <p>Director: </p>
              <p>description</p>
            </div>
            <div>
              <h2>test</h2>
              <p>Year:</p>
              <p>Director: </p>
              <p>description</p>
            </div>
          </div>
        </div>
      </div>
        </>  
    );
}