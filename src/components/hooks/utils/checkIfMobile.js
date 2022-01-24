import { useEffect, useState } from "react";

const useCheckIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.screen.width <= 760 ? setIsMobile(true) : setIsMobile(false);
  }, [window.screen.width]);

  function detectWindowSize() {
    window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = detectWindowSize;

  return isMobile;
};

export default useCheckIsMobile;
