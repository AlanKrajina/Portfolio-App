import React, { useEffect } from 'react';
import './IntroSection.css';
import './canvas.css';
import { ParticleNetwork } from './canvas.js';

const IntroSection: React.FC = () => {

    var options = {
        particleColor: '#fff',
        background: '#1d1d1d',
        interactive: true,
        speed: 'fast',
        density: 'medium'
    };

    useEffect(() => {
        new ParticleNetwork(document.getElementById('particle-canvas'), options);
      }, []);

    return (
        <div id="particle-canvas">
            <div className='introSection' style={{top: '16rem'}}>
                <span className='hoverBounce'>H</span>
                <span className='hoverBounce'>i</span>
                <span className='hoverBounce'>,</span>
            </div>
            <div className='introSection' style={{top: '22rem'}}>
                <span className='hoverBounce'>I</span>
                <span className='hoverBounce'>'</span>
                <span className='hoverBounce'>m</span>
                <span> </span>
                <span className='hoverBounce'>A</span>
                <span className='hoverBounce'>l</span>
                <span className='hoverBounce'>a</span>
                <span className='hoverBounce'>n</span>
            </div>
            <div className='introSection' style={{top: '28rem'}}>
                <span className='hoverBounce'>W</span>
                <span className='hoverBounce'>e</span>
                <span className='hoverBounce'>b</span>
                <span> </span>
                <span className='hoverBounce'>d</span>
                <span className='hoverBounce'>e</span>
                <span className='hoverBounce'>v</span>                    
                <span className='hoverBounce'>e</span>
                <span className='hoverBounce'>l</span>
                <span className='hoverBounce'>o</span>
                <span className='hoverBounce'>p</span>
                <span className='hoverBounce'>e</span>
                <span className='hoverBounce'>r</span>
            </div>
            <div className='introSection' style={{top: '36rem'}}>
                <p>Front End Developer / React || Svelte</p> 
            </div>
        </div>
    )
  }
  
  export default IntroSection;