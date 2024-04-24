import { socials } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Footer = () => {
  return (
    <Section id="Contact">
      <Heading tag="Let's Connect" title="Contact Me" />
      <div className="container flex sm:just-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block ">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 hover:bg-color-1 rounded-full transition-colors"
            >
              <img src={item.iconUrl} height={20} width={20} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
