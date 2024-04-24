import profile1 from "../assets/hero/profile1.png";
import photo from "../assets/hero/photo.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const words = ["Coder", "Web Developer", "Machine Learning Enthusiast"];
  const [index, setIndex] = useState(0);

  const imgContainerStyle = {
    position: "relative",
    // Other styles you might want to apply to the container

    // Inline styles for the gradient overlay
    "::after": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(rgba(1, 3, 0, 0.7), rgba(0, 0, 0, 0.7))",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Home"
      className="h-[40rem] w-full flex justify-center items-center max-lg:flex-col "
    >
      <div className="max-w-[650] max-h-[650] ml-10 mr-10 z-2">
        <img
          className="rounded-full"
          src={photo}
          height={550}
          width={550}
          alt=""
          style={imgContainerStyle}
        />
      </div>
      <div className="w-full max-md:mt-10 ">
        <h1 className="h1 mb-6 ">
          Hey, I'm <span className="text-color-1">Anukul!!</span>
          <br />
          Passionate{" "}
          <span className="text-color-1 animate-slideInLeft">
            {words[index]}
          </span>
        </h1>

        <p className="body-1 max-w-3xl  mb-6 text-n-2 lg:mb-8 ">
          A dedicated computer science student currently immersed in my studies,
          I am fueled by a passion for coding and a keen interest in exploring
          the dynamic realms of web development and machine learning.
        </p>
      </div>
    </section>
  );
};

export default Hero;
