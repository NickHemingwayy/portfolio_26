"use client";
import projects from "@/app/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Coin from "@/components/ui/coin";

export default function ProjectPage() {
  const params = useParams();
  const projectID = params.slug;

  const project = projects.find((project) => project.id === projectID);

  if (!project) {
    return notFound();
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <main className="container max-w-5xl min-h-screen px-4 lg:px-10 sm:px-16 pb-10 sm:pb-20 pt-24 sm:pt-30">
        <Button variant={"link"} asChild className="text-accent !ps-0">
          <Link
            href={"/#projects"}
            className="flex items-center gap-2 text-accent"
          >
            <ChevronLeft />
            Back
          </Link>
        </Button>
        <div className="flex flex-col sm:flex-row justify-between gap-4 flex-wrap">
          <h1 className="font-urban text-4xl sm:text-6xl font-bold mt-2">
            {project.title}
          </h1>
          {project.url && (
            <span>
              <Button
                variant={"outline"}
                asChild
                className="px-4 py-2 font-medium txt-medium"
              >
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open URL <ExternalLink />
                </Link>
              </Button>
            </span>
          )}
        </div>
        <span className="block mt-6 sm:mt-12">Technologies:</span>
        <div className="flex gap-2 mt-2 flex-wrap">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant={"outline"}>
              {technology}
            </Badge>
          ))}
        </div>
        <Separator className="my-10 sm:my-16 bg-white/50" />
        <p className="text-lg">{project.description}</p>

        <div className="grid gap-4 grid-cols-2 mt-4">
          {project.gallery.map((image) => (
            <Dialog key={image}>
              <DialogTrigger>
                <Image
                  key={image}
                  src={image}
                  alt={project.title}
                  width={800}
                  height={800}
                  className="rounded-md aspect-[3/2] object-cover cursor-pointer"
                />
              </DialogTrigger>
              <DialogContent className="p-2 !max-w-[1200px]">
                <DialogTitle className="hidden">{project.title}</DialogTitle>
                <DialogDescription className="hidden">
                  {project.description}
                </DialogDescription>
                <Image
                  key={image}
                  src={image}
                  alt={project.title}
                  width={1200}
                  height={1200}
                  className="rounded-lg w-full"
                />
              </DialogContent>
            </Dialog>
          ))}
          {projectID == "show-offf" && (
            <div className="w-full aspect-[3/2] flex items-center justify-center">
              <Coin id="3" />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
