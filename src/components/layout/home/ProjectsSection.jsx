import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Hogwarts",
    description: "A beautiful landing page about Hogwarts using React and Tailwind.",
    image: "/Projects/Project1.png",
    tags: ["React", "TailwindCSS", "Next"],
    demoUrl: "https://hogwarts.renatarsilva.com/",
    githubUrl: "https://github.com/renatarsilva/hogwarts",
  },
  {
    id: 2,
    title: "Carepulse",
    description: "Medical appointment platform.",
    image: "/Projects/Project2.png",
    tags: ["React", "TailwindCSS", "Next.js"],
    demoUrl: "https://carepulse-five-alpha.vercel.app/",
    githubUrl: "https://github.com/renatarsilva/carepulse",
  },
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-28 px-4 snap-start"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A small selection of projects focused on clean design, performance and user experience.
        </p>

        {/* Wrapper geral */}
        <div className="flex items-center justify-center gap-10">

          {/* Botão esquerdo */}
          <button
            onClick={prevProject}
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
          >
            <ArrowLeft />
          </button>

          {/* Carrossel */}
          <div className="relative overflow-hidden w-full max-w-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-full">
                  <div className="bg-card rounded-2xl overflow-hidden">

                    {/* Imagem */}
                    <div className="h-72 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="p-8">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl font-semibold mb-2">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-6 max-w-xl">
                        {project.description}
                      </p>

                      {/* Links */}
                      <div className="flex items-center gap-6">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
                        >
                          Live Demo <ExternalLink size={16} />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
                        >
                          Source Code <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão direito */}
          <button
            onClick={nextProject}
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
          >
            <ArrowRight />
          </button>
        </div>

        <div className="flex justify-center items-center gap-6 mt-12">
          {/* Botão contato */}
          <a
            href="#contact"
            className="cosmic-button inline-flex items-center gap-2"
          >
            Contact me
          </a>

          {/* Botão GitHub */}
          <a
            href="https://github.com/R3I5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
