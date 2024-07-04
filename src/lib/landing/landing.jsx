import React, { useRef } from "react";
import { useScroll, animated, useSpring } from '@react-spring/web'
import brickimg from '../../assets/brick.png';
import cloudsimg from '../../assets/clouds.png';
import mountainsimg from '../../assets/mountains.png';
import sunimg from '../../assets/sun.png';

export function Landing() {
    const containerRef = useRef(null);
    const barContainerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        container: containerRef,
        onChange: ({ value: { scrollYProgress }}) => {
            if (scrollYProgress > 0.7) {

            }
        }
    })

    return (
        <div className="landing">
            <animated.img className="landing-img" src={brickimg} />
            <animated.img className="landing-img" src={cloudsimg} />
            <animated.img className="landing-img" src={mountainsimg} />
            <animated.img
                className="landing-img"
                style={{
                    clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
                }}
                src={sunimg}
            />
        </div>
    )
}

