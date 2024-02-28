import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollBackgroundAnimation = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(background, { duration: 1, backgroundColor: '#ab87cd80' }); // Change to your desired background color

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollProgress = scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
      
      tl.progress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff', // Initial background color
        zIndex: -1, // Ensure the background stays behind other content
      }}
    />
  );
};

export default ScrollBackgroundAnimation;
