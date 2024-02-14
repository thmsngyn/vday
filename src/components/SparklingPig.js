import React, { useEffect, useState } from "react";
import "./SparklingPig.css"; // Make sure to import or define the styles for your pig

const SparklingPig = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Trail
      [0.8, 0.5, 0.25, 0.6].forEach((i) => {
        const j = (1 - i) * 50;
        const elem = document.createElement("div");
        const precision = 50; // 2 decimals
        const randomnum =
          Math.floor(
            Math.random() * (10 * precision - 1 * precision) + 1 * precision
          ) /
          (1 * precision);
        const rOpacity = randomnum / 10;
        const rSize = randomnum / 120;

        elem.style.position = "fixed";
        elem.classList.add("star-five");
        elem.style.zIndex = 6;
        elem.style.transform = `rotate(35deg) scale(${rSize})`;
        elem.style.top =
          e.pageY + Math.round(Math.random() * j - j / 2) - 50 + "px";
        elem.style.left =
          e.pageX + Math.round(Math.random() * j - j / 2) - 90 + "px";
        elem.style.opacity = rOpacity;
        elem.style.pointerEvents = "none";
        document.body.appendChild(elem);
        window.setTimeout(() => {
          document.body.removeChild(elem);
        }, Math.round(Math.random() * i * 800));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="sparkling-pig"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default SparklingPig;
