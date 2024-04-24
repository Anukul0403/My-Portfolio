import Section from "./Section";
import Heading from "./Heading";
import { projects } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <Section id="Projects">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Projects"
          title="Projects"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {projects.map((item) => (
            <div
              className="block relative p-0.5 bg-n-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h2 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-2">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />

                  {/* https://github.com/Anukul0403/Instagram-Spam-User-Detector<a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline cursor-pointer">
        Click me!
      </a> */}
                  <a
                    href={item.link}
                    className="ml-auto font-code text-sm font-bold text-n-1 uppercase tracking-wider cursor-pointer"
                  >
                    Check Out
                  </a>

                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
