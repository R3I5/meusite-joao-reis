const projects = [
    {
        label: "WEB PLATFORM",
        title: "Papyrus",
        status: "In Progress",
        description:
            "Sistema voltado à organização de estudos, com foco em estrutura, experiência de uso e base sólida para evolução.",
        stack: ["PHP", "React", "MySQL"],
    },
    {
        label: "EMBEDDED PROJECT",
        title: "gasSensor",
        status: "Prototype",
        description:
            "Projeto envolvendo sensores e integração com hardware, aproximando software, leitura de dados e interação com o ambiente físico.",
        stack: ["ESP32", "C++", "IoT"],
    },
    {
        label: "PERSONAL INTERFACE",
        title: "Portfolio System",
        status: "Building",
        description:
            "Meu portfólio pessoal com estética cyber-industrial, interface inspirada em sistemas portáteis e foco em identidade técnica autoral.",
        stack: ["React", "Tailwind", "UI/UX"],
    },
];

export function ProjectsSection() {
    return (
        <section
            id="projects"
            className="scroll-mt-24 border-b border-cyan-200/10 py-16 md:py-20"
        >
            <div className="mx-auto w-[92%] max-w-350">
                <div className="mb-6 pcb-panel p-6 md:p-8">
                    <span className="pcb-label">PROJECTS</span>

                    <h2 className="mt-5 font-heading text-3xl leading-tight text-white md:text-4xl">
                        Software, systems and interface experiments.
                    </h2>

                    <p className="mt-5 max-w-230 text-base leading-8 text-slate-300">
                        Os projetos abaixo representam três frentes importantes da minha
                        jornada: produto web, exploração com embarcados e construção de
                        identidade técnica.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.title} className="pcb-panel p-6">
                            <div className="flex items-start justify-between gap-4">
                                <span className="pcb-label">{project.label}</span>
                                <span className="rounded-md border border-orange-300/20 bg-orange-300/10 px-2 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-orange-200">
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="mt-5 font-heading text-2xl text-white">
                                {project.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                {project.description}
                            </p>

                            <div className="pcb-divider my-6" />

                            <div className="flex flex-wrap gap-3">
                                {project.stack.map((item) => (
                                    <span key={item} className="pcb-tag">
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6">
                                <a href="#contact" className="pcb-button pcb-button--ghost">
                                    More details
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}