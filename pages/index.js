import { useState, useEffect } from "react";
import {Headbar } from '../components/Headbar'
export default function Home() {
  const Wsize = useWindowSize();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (Wsize.height > height) {
      setHeight(Wsize.height);
    }
    if(Wsize.width > height) {
      setHeight(Wsize.height);
    }
  }, [Wsize.height, Wsize.width, height]);

  return (
    <>
      <div>
        <p>{height}</p>
        <input placeholder="Ingrese algo"></input>
        <Headbar></Headbar>
      </div>
    </>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
