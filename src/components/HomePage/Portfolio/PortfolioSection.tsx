import React, { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { styles } from "./portfolioStyles";
import '../Home.css';
import hubFront from "./images/hubFront.png";
import guessANumberFront from "./images/guessANumberFront.png";
import learnfullstackFront from "./images/learnfullstackFront.png";
import pizzaOnRailsFront from "./images/pizzaOnRailsFront.png";
import sosellBrowserFront from "./images/sosellBrowserFront.png";
import sosellMobileFront from "./images/sosellMobileFront.png";
import visualCVFront from "./images/visualCVFront.png";

const PortfolioSection: React.FC = () => {

    const initialImages: string[] = [hubFront, sosellBrowserFront, sosellMobileFront, guessANumberFront, pizzaOnRailsFront, visualCVFront, learnfullstackFront];
    const [imagesState, setImagesState] = useState<string[]>([]);
    let loadImages: boolean = true;
    
    const renderImages = useCallback(
        () => {
            if (loadImages) {
                let delay = 200;
                initialImages.forEach(e => {
                    setTimeout(function(){
                        setImagesState(arr => [...arr, e]);
                    }, delay);
                    delay += 200;
                })
            }
            loadImages = false;
        },
        [],
    );

    useEffect(() => {
        ScrollTrigger.create({
            trigger: '#section',
            onEnter: renderImages,
       });
    }, [renderImages]);


    const mouseOver = (event: any) => {
        event.target.style.zIndex= 2;        
        event.target.style.transform = 'scale(1.2)';
        event.target.style.transitionDuration= '0.5s';
    }

    const mouseOut = (event: any) => {
        event.target.style.transform= 'scale(1)';
        event.target.style.zIndex= 1;
    }

    return (
        <div style={styles.Section}>
            <h1 style={styles.Title}>My Portfolio</h1>
            <p>A small gallery of recent projects. Some of them were done while working for Agent3 and others when I was enrolled in Flatiron School.</p>
            <p>It's only a drop in the ocean compared to the entire list. In total I worked on approx 20 projects where my main responsibility was development of all frontend functionality.</p>
            <p>Visit my <Link to='/about'>work page</Link> to see a more in-depth view.</p>
            <div id='section' style={styles.ImagesGallery}>
                {imagesState.map((elem, key) => {
                    return <img key={key} src={elem} className='photoEffect' alt="portfolioImage" onMouseOver={mouseOver} onMouseOut={mouseOut}/>
                })}
            </div>
        </div>
    )
  }
  
  export default PortfolioSection;