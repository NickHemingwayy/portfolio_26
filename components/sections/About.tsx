import { MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="lg:max-w-1/2 w-full items-center justify-center my-10 sm:my-16">
      <div className="flex-col flex justify-center">
        <h2 className="font-urban text-4xl font-bold">Who am I?</h2>
        <span className="text-muted-foreground flex items-center gap-2">
          <MapPin size={"1em"} />
          Kelowna, BC
        </span>
        <p className="my-2">
          I build full-stack web applications with TypeScript, specializing in
          Next.js and SvelteKit.
        </p>
        <p>
          I develop clean, performant solutions that solve real business
          problems. My work spans from crafting intuitive user interfaces to
          designing scalable backend systems. Check out my projects below to see
          how I've helped companies ship better products faster.
        </p>
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
};

export default About;
