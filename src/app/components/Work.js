import React, { useRef, useEffect } from "react";
import "../Home.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import IMAGES from "../../Images/images";
gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  useEffect(() => {
    var sections = gsap.utils.toArray(".block-list__item");
    var mark = gsap.to(sections, {
      xPercent: -49 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: ".scroll-content",
        pin: true,
        scrub: -1,
        //snap: directionalSnap(1 / (=sections.length - 1)),
        end: "+=3000",
      },
    });
  });

  return (
    <div>
      <div class="scroll-content">
        <div class="section section--vertical" id="second">
          <h1 class="title-1">WORK</h1>
          <div class="block-list">
            <div class="block-list__item">
              <div class="block-list__item-inner">
                <a href="https://tatoteatro.herokuapp.com/">
                  <img src={IMAGES.moviefinderLogo} class="card img" alt="" />
                  <div class="card-box">
                    <h1>Teatro</h1>
                    <p>Watch your favorite shows and movies</p>

                    <a href="https://github.com/ayadalshaikhli/apiproject">
                      <FaGithub className="" />
                    </a>
                  </div>
                </a>
              </div>
            </div>
            <div class="block-list__item">
              <div class="block-list__item-inner">
                <a href="https://delicat-bastille-97120.herokuapp.com/">
                  <img src={IMAGES.DeliciosooLogo} class="card img" alt="" />
                  <div class="card-box">
                    <h1>Delicioso</h1>
                    <p>Search for recipes based on your ingredients</p>
                    <a href="https://github.com/ayadalshaikhli/Delicioso">
                      <FaGithub className="" />
                    </a>
                  </div>
                </a>
              </div>
            </div>
            <div class="block-list__item">
              <div class="block-list__item-inner">
                <a href="https://ayadalshaikhli.github.io/Weather-Rader/">
                  <img src={IMAGES.weatherproject} class="card img" alt="" />
                  <div class="card-box">
                    <h1>Weather Project</h1>
                    <p>Look up the up coming forcast</p>
                    <a href="https://github.com/ayadalshaikhli/Weather-Rader">
                      <FaGithub className="" />
                    </a>
                  </div>
                </a>
              </div>
            </div>
            <div class="block-list__item">
              <div class="block-list__item-inner">
                <a href="https://startying-ayadalshaikhli.vercel.app/">
                  <img src={IMAGES.techLogo} class="card img" alt="" />
                  <div class="card-box">
                    <h1>TatoMaaNGe</h1>
                    <p>Professional Top Nature Hair Brush Shopify</p>
                    <a href="https://github.com/ayadalshaikhli/starting-code">
                      <FaGithub className="" />
                    </a>
                  </div>
                </a>
              </div>
            </div>
            <div class="block-list__item">
              <div class="block-list__item-inner">
                <a href="https://ayadalshaikhli.github.io/dayplanner/">
                  <img src={IMAGES.dayplannerLogo} class="card img" alt="" />
                  <div class="card-box">
                    <h1>Day Planner</h1>
                    <p>Start planning your day hour by hour</p>
                    <a href="https://github.com/ayadalshaikhli/dayplanner">
                      <FaGithub className="" />
                    </a>
                  </div>
                </a>
              </div>
            </div>
            <div class="block-list__item">
              <div class="block-list__item-inner">
                <a href="https://ayadalshaikhli.github.io/apiproject/">
                  <img src={IMAGES.ballfinderLogo} class="card img" alt="" />
                  <div class="card-box">
                    <h1>Ball Finder</h1>
                    <p>Search for upcoming event for your favorite team</p>
                    <a href="https://github.com/ayadalshaikhli">
                      <FaGithub className="" />
                    </a>
                  </div>
                </a>
              </div>
            </div>

            <div class="block-list__item">
              <div class="block-list__item-inner">
                <a href="https://ayadalshaikhli.github.io/ledyanailart/">
                  <img src={IMAGES.Animation} class="card img" alt="=" />
                  <div class="card-box">
                    <h1>Ledya Nail Art</h1>
                    <p>JavaScript , HTML,CSS , jQuery</p>
                    <a href="https://github.com/ayadalshaikhli/ledyanailart">
                      <FaGithub className="" />
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
