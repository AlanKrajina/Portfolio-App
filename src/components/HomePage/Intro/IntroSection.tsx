import React, { useEffect } from 'react';
import '../Home.css';
import { styles } from "./introStyles";
import { ParticleNetwork } from './canvas.js';

interface Options {
    particleColor: string;
    background: string;
    interactive: boolean;
    speed: string;
    density: string;
};

interface Intro {
    elementId: string;
    title: string[];
};

const IntroSection: React.FC = () => {

    useEffect(() => {
        new ParticleNetwork(document.getElementById('particle-canvas'), options);
        showIntro();
      }, []);   

    const options: Options = {
        particleColor: '#08fdd8',
        background: '#1d1d1d',
        interactive: true,
        speed: 'medium',
        density: 'medium'
    };

    const intro: Intro[] = [{
            elementId: 'firstSection',
            title: ['H','i',',']
        }, {
            elementId: 'secondSection',
            title: ['I',`'`,'m','&nbsp','A','l','a','n',',']
        }, {
            elementId: 'thirdSection',
            title: ['w','e','l','c','o','m','e','&nbsp', 't','o','&nbsp','m','y','&nbsp','P','o','r','t','f','o','l','i','o','&nbsp','A','p','p','&nbsp']
    }]

    const initialBounce = (span: HTMLSpanElement) => {
        span.classList.add('initialBounce'); 
        setTimeout(function(){
            span.classList.remove('initialBounce');    
        }, 100);
    }
    
    const showIntro = (): void => {
        let delay = 100;
        intro.forEach(e => {
            const section = document.getElementById(e.elementId);
            e.title.forEach((el, index) => {
                setTimeout(function(){
                    const span = document.createElement('span');
                    span.className = 'hoverBounce';
                    if (e.elementId === 'firstSection' && index === 0) {
                        span.classList.add('introSectionTitle'); 
                    }
                    span.innerHTML = el;
                    initialBounce(span);
                    section?.append(span);
                    if (e.elementId === 'thirdSection' && index === (e.title.length - 1)) {
                        const p = document.createElement('p');
                        p.className = 'introSectionParagraph';
                        p.innerHTML = 'Front End Developer / React || Svelte';
                        section?.append(p);
                    }
                }, delay);
                delay += 50;
            })
        })
    }

    return (
        <div id="particle-canvas" style={styles.ParticleCanvas}>
            <div id='firstSection' style={styles.IntroSection}/>
            <div id='secondSection' style={{...styles.IntroSection, top: '38vh'}}/>
            <div id='thirdSection' style={{...styles.IntroSection, top: '46vh'}}/>
        </div>
    )
  }
  
  export default IntroSection;