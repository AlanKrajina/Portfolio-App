import React, { useEffect } from 'react';
import './IntroSection.css';
import './canvas.css';
import { ParticleNetwork } from './canvas.js';

interface Options {
    particleColor: string;
    background: string;
    interactive: boolean;
    speed: string;
    density: string;
};

const IntroSection: React.FC = () => {
    const options: Options = {
        particleColor: '#08fdd8',
        background: '#1d1d1d',
        interactive: true,
        speed: 'fast',
        density: 'medium'
    };

    useEffect(() => {
        new ParticleNetwork(document.getElementById('particle-canvas'), options);
        showIntro();
      }, []);

    const intro: string[] = [
        'H','i',',',
        'I',`'`,'m','&nbsp','A','l','a','n',
        ',','w','e','l','c','o','m','e','&nbsp', 't','o','&nbsp','m','y','&nbsp','P','o','r','t','f','o','l','i','o','&nbsp','A','p','p','&nbsp'];

    const showIntro = (): void => {
        let delay = 100;
        let firstSection = document.getElementById('firstSection');
        let secondSection = document.getElementById('secondSection');
        let thirdSection = document.getElementById('thirdSection');

        intro.forEach((el, index) => {
            setTimeout(function(){
                let span = document.createElement("span");
                span.className = 'hoverBounce';
                span.innerHTML = el;
                if (index < 3) {
                    firstSection?.append(span);
                } else if (index > 2 && index < 12) {
                    secondSection?.append(span);
                } else if (index > 11 && index < 39) {
                    thirdSection?.append(span);
                } else {
                    let p = document.createElement("p");
                    p.innerHTML = 'Front End Developer / React || Svelte';
                    thirdSection?.append(p);
                }
            }, delay);
            delay += 60;
        })
    }

    return (
        <div id="particle-canvas">
            <div id='firstSection' className='introSection'/>
            <div id='secondSection' className='introSection' style={{top: '37vh'}}/>
            <div id='thirdSection' className='introSection' style={{top: '45vh'}}/>
        </div>
    )
  }
  
  export default IntroSection;