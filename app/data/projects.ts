interface Project {
  id: string;
  technologies: string[];
  title: string;
  blurb: string;
  description: string;
  url: string;
  gallery: string[];
}

const dveleIQ: Project = {
  id: "dvele-iq",
  technologies: ["Expo", "Python", "AWS IoT", "Debian", "MySQL"],
  title: "Dvele IQ",
  blurb:
    "A unified smart home system that gives all of your homes vitals in one location.",
  description:
    "Dvele IQ is a unified solution to integrate all of a homes smart devices, and in-home health monitoring in one location. The system has many sub-systems that must work in harmony to ensure the user always has access to view and control the status of their homes. I had a major role in the development of Dvele IQ, primarily I was tasked with owning the development of our Expo application that needed to integrate seamlessly with the rest of our systems. This required me to work closely with owners of the other parts of the system to ensure proper integration.",
  url: "",
  gallery: [
    "/projects/dvele-iq/dvele-iq-1.webp",
    "/projects/dvele-iq/dvele-iq-2.jpg",
  ],
};

const designStudio: Project = {
  id: "design-studio",
  technologies: [
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "MySQL",
    "AWS Amplify",
  ],
  title: "Design Studio",
  blurb:
    "A home builder tool that gives potential buyers a better insight of what their home could look like.",
  description:
    "Design studio is a web application build I completed during my time at Dvele. The aim of this build was to create a lead-driving builder tool to give potential Dvele home buyers a better insight of what their home could look like. Important features include integration with an ERP system to retrieve build data, saving builds to users accounts and generating a PDF copy of their builds selections. \n\nI had a primary role in the design and development of this application and was responsible for a successful launch to the public. ",
  url: "",
  gallery: [
    "/projects/design-studio/design-studio-1.jpg",
    "/projects/design-studio/design-studio-2.jpg",
  ],
};

const showOfff: Project = {
  id: "show-offf",
  technologies: [
    "Remix.js",
    "TailwindCSS",
    "TypeScript",
    "PostreSQL",
    "Supabase",
  ],
  title: "Show Offf",
  blurb:
    "A streamlined portfolio maker that allows you to centralize your contact information and showcase your skills.",
  description:
    "ShowOfff is my personal brain child stemming from an itch to prove to myself what I was capable of building solo after a few years of industry level experience. The app attempts to solve a gap in the market by offering a seamless setup of a personal portfolio to easily be shared as a digital business card. I used this build as an opportunity to try out a few new technologies I had been interested in, including Remix and Supabase.",
  url: "",
  gallery: [
    "/projects/show-offf/showofff-1.jpg",
    "/projects/show-offf/showofff-2.jpg",
    "/projects/show-offf/showofff-3.jpg",
  ],
};

const pack4u: Project = {
  id: "pack-4-u",
  technologies: ["ModX", "Bootstrap", "JQuery", "PHP"],
  title: "Pack4U",
  blurb:
    "A profesional, dynamic website build using Bootstrap, jQuery, and PHP.",
  description:
    "Pack4U was my first website build that featured complex CSS3 transitions animated from scratch. The client was after eye-catching visuals without sacrificing any performance or accessibility, highlighting importance to how animations were approached.",
  url: "",
  gallery: [
    "/projects/pack4u/pack4u-1.jpg",
    "/projects/pack4u/pack4u-2.jpg",
    "/projects/pack4u/pack4u-3.jpg",
  ],
};
const projects = [dveleIQ, designStudio, showOfff, pack4u];
export default projects;
