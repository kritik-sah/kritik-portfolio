import React from 'react'
import Skills from './Skills';
import Typed from "typed.js";
import Luffy from "../img/luffy.png"
import { Youtube , Github , Whatsapp} from 'react-bootstrap-icons';
import GithubStats from './GithubStats';
import { useEffect, useRef } from "react";


const About = () => {
    const whatIm = useRef(null);

    useEffect(() => {
        const Iam = new Typed(whatIm.current, {
          strings: [
            'FullStack Web Developer',
            'Graphic Designer',
            'Video Editor',
            'YouTuber',
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
        <div className="container spacer ">
        <div className="about" id="about">
         <div className="sec-left ">
            <h4 className="txt-u-line">About Me:</h4>
            <h1>I am a&nbsp;
            <span ref={whatIm}></span>
            
            </h1>
            {/* <p className="width-80">There are so many ways i can describe my self but for now i think only One word is enough <strong>"<em className="txt-u-line">Learner</em>".</strong></p> */}
            <p className="width-80">Hello, I’m Kritik Sah 21 years old, web developer and willing to learn new skills so I can improve and perfect those skills which I already have. I want to be a blockchain developer, that's why I am learning it everyday.</p>
            <a href="https://www.youtube.com/channel/UCh7-f_QrD7WcQcu62CixiHQ" target="_blank" rel="noreferrer" className="btn m-10 btn-outline-danger"><Youtube /> YouTube</a>
            <a href="https://github.com/kritik-sah" target="_blank" rel="noreferrer" className="btn m-10 btn-outline-warning"><Github /> GitHub</a>
            <a href="https://wa.link/xpwssg" target="_blank" rel="noreferrer" className="btn m-10 btn-outline-success"><Whatsapp /> WhatsApp</a>
         <Skills />
         <GithubStats/>
         </div>
         </div>
         <div className="luffy">
         <img src={Luffy} alt="Luffy" height="200px" width="auto" />
         </div>
    </div>
    )
}

export default About
