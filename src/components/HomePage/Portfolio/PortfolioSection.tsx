import '../Home.css';
import { styles } from "./portfolioStyles";
import hubFront from "./images/hubFront.png";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useState, useCallback } from 'react';

const PortfolioSection: React.FC = () => {

    const initialImages: string[] = [hubFront,hubFront,hubFront,hubFront,hubFront,hubFront];
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

    return (
        <div style={styles.Section}>
            <h1 style={styles.Title}>My Portfolio</h1>
            <div id='section' style={styles.ImagesGallery}>
                {imagesState.map((elem, key) => {
                    return <img key={key} src={elem} className='photoEffect' alt="portfolioImage"/>
                })}
            </div>
        </div>
    )
  }
  
  export default PortfolioSection;