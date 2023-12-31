import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Video = ({ url, pUrl, sec }) => {
  const [bg, setBg] = useState(false);
  const [onLoad, setOnLoad] = useState(false);

  const setTrue = () => {
    setBg(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setTrue();
    }, sec);
  }, [onLoad]);

  return (
    <div autoPlay className="md:h-[800px]  ">
      {bg ? (
        <img
          src={pUrl}
          onLoad={() => setOnLoad(!onLoad)}
          className="w-full h-full"
        />
      ) : (
        <img src={url} className="w-full h-full" />
      )}
    </div>
  );
};

export default Video;
