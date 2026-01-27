import projects from "@/app/data/projects";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="w-full items-center justify-center lg:max-w-1/2"
      id="projects"
    >
      <h2 className="font-urban text-4xl font-bold">Projects</h2>

      <div className="mt-8 flex flex-col gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="overflow-x-hidden"
          >
            <div className="flex gap-1 items-center group translate-x-[-30px] hover:translate-x-0 transition-transform hover:text-accent">
              <ChevronsRight className="" />
              <h3 className="font-bold text-xl">{project.title}</h3>
            </div>

            <p className="text-muted-foreground">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
