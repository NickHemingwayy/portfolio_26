interface Project {
  id: string;
  technologies: string[];
  title: string;
  description: string;
  url: string;
  gallery: string[];
}

const dveleIQ: Project = {
  id: "dvele-iq",
  technologies: ["Expo", "Python", "AWS IoT", "Debian", "MySQL"],
  title: "Dvele IQ",
  description:
    "A smart home automation system that uses IoT and AI to control smart enabled devices and provide an insight into your homes health.",
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
  description:
    "A custom home design studio that allows you to create and customize your own homes.",
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
  description:
    "A streamlined portfolio maker that allows you to cntralize your contact information and showcase your skills.",
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
  description:
    "A profesional, dynamic website build using Bootstrap, jQuery, and PHP.",
  url: "",
  gallery: [
    "/projects/pack4u/pack4u-1.jpg",
    "/projects/pack4u/pack4u-2.jpg",
    "/projects/pack4u/pack4u-3.jpg",
  ],
};
const projects = [dveleIQ, designStudio, showOfff, pack4u];
export default projects;
