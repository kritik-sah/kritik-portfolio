import React from "react";
import { Whatsapp } from "react-bootstrap-icons";
import Particles from "react-tsparticles";
import Typed from "typed.js";
import Profile from "../img/profile.png";
import SkillData from '../data/SkillData'
import { useEffect, useRef } from "react";

const Hero = () => {
  

  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {

  };

  const whatMi = useRef(null);

    useEffect(() => {
        const Iam = new Typed(whatMi.current, {
          strings: [
            "A Web Developer",
            "A Graphic Designer",
            "A YouTuber",
          ], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          
          typeSpeed: 40,
          backSpeed: 50,
          loop: true
          
        });
        return () => {
            Typed.destroy();
          };
        }, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 30,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.6,
                size: 10,
              },
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="container-fluid hero d-flex align-items-center justify-content-center">
        <div className="container glasscard">
          <div className="row">
            <div className="col-lg-3">
              <img
                className="img-thumbnail profile d-block m-auto"
                src={Profile}
                alt="profile"
              />
            </div>
            <div className="col-lg-9">
              <p className="m-0"><small>Hi, I'm</small></p>
              <h1>Kritik Sah</h1>
              <p>
              <span ref={whatMi}></span>
              </p>
              <h4 data-bs-toggle="tooltip" data-bs-placement="bottom" title="Call or WhatsApp">+91 702 124 5436 <Whatsapp/></h4>
            </div>
            <div className="col-12 p-1 d-none d-md-flex flex-wrap  align-items-center justify-content-center">
            {SkillData.map(function (Props){
            return(
                <span key={Props.id} className={"badge m-2 bg-"+Props.color}>{Props.tooltipMsg}</span>
                )})}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
