import { MapPin } from "lucide-react";
import Flashlight from "../Flashlight";
import Coin from "../ui/coin";

const About = () => {
  return (
    <div className="w-full grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div className="flex-col flex justify-center w-full my-10 sm:my-16">
        <div className="flex items-end gap-4">
          <h2 className="font-urban text-4xl font-bold">Who am I?</h2>
          <div className="md:hidden">
            <Coin id="4" />
          </div>
        </div>
        <span className="text-muted-foreground flex items-center gap-2">
          <MapPin size={"1em"} />
          Kelowna, BC
        </span>
        <p className="my-2">
          I build full-stack web applications with TypeScript, specializing in
          Next.js and Expo.
        </p>
        <p>
          I develop clean, performant solutions that solve real business
          problems. My work spans from crafting intuitive user interfaces to
          designing scalable backend systems. Check out my projects below to see
          how I've implemented real world solutions.
        </p>
      </div>

      <div className="hidden md:block">
        <Flashlight />
      </div>
    </div>
  );
};

export default About;
