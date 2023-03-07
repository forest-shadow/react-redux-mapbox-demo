import {useState, useEffect} from 'react'

export enum WINDOW_SIZE_DIMENSION {
  WIDTH = 'width',
  HEIGHT = 'height'
}
type TWindowSizeState = {[key in WINDOW_SIZE_DIMENSION]: number};
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<TWindowSizeState>({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const handleResize = () =>{
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}