import { useEffect, useState } from "react";

const ProgressReader = () => {
  const [scrollY, setSrcollY] = useState(0);
  const lastValueScrolledY = document.body.offsetHeight - window.innerHeight;

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollValue = window.scrollY;
      setSrcollY(scrollValue);
      console.log(scrollY);
    });
  }, [scrollY]);

  return (
    <div className="relative">
      <progress
        id="file"
        max={lastValueScrolledY}
        value={scrollY}
        className="w-full h-3 mb-3 fixed top-[76px]"
      >
        70%
      </progress>
    </div>
  );
};

export default ProgressReader;
