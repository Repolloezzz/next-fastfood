import { useState, useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { Searchbar } from "../components/Search";
import { Footer } from "../components/Footer";
export default function Home() {
  const Wsize = useWindowSize();
  const [height, setHeight] = useState(0);
  const [swHeight, setSwHeight] = useState(true);
  useEffect(() => {
    if (Wsize.height > height) {
      setHeight(Wsize.height);
    }
    if (Wsize.width >= height) {
      if (swHeight) {
        setHeight(Wsize.height);
        setSwHeight(false)
      }
    }
    if(Wsize.width < height) {
      setSwHeight(true)
    }
    //console.log(swHeight)
  }, [Wsize.height, Wsize.width, height, swHeight]);

  return (
    <>
      <div>
        <Headbar height={height}></Headbar>
        <Searchbar height={height}></Searchbar>
        <Footer></Footer>
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
