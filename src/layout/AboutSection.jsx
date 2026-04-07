const aboutBlocks = [
    {
        label: "IDENTITY",
        title: "Engineering mindset first",
        text: "Gosto de software com estrutura, clareza e intenção. Busco construir soluções organizadas, com lógica forte, boa base técnica e visual consistente.",
    },
    {
        label: "FOCUS",
        title: "Java for robust back-end",
        text: "Meu eixo principal de carreira está no desenvolvimento back-end com Java, pensando em APIs, regras de negócio, persistência de dados e evolução sólida do sistema.",
    },
    {
        label: "PRECISION",
        title: "C++ and embedded systems",
        text: "Minha conexão com C++ e sistemas embarcados reforça meu lado analítico: proximidade com hardware, raciocínio técnico, controle e desempenho.",
    },
];

export function AboutSection() {
    return (
        <section
            id="about"
            className="scroll-mt-24 border-b border-cyan-200/10 py-16 md:py-20"
        >
            <div className="mx-auto grid w-[92%] max-w-350 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="pcb-panel p-6 md:p-8">
                    <span className="pcb-label">ABOUT</span>

                    <h2 className="mt-5 font-heading text-3xl leading-tight text-white md:text-4xl">
                        A portfolio built like a system interface.
                    </h2>

                    <div className="pcb-divider my-6" />

                    <p className="text-base leading-8 text-slate-300">
                        Este portfólio não foi pensado como uma vitrine genérica, mas como
                        uma interface que representa meu jeito de construir tecnologia:
                        estruturado, técnico, visualmente intencional e conectado tanto ao
                        software quanto ao hardware.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {aboutBlocks.map((block) => (
                        <article key={block.label} className="pcb-panel p-6">
                            <span className="pcb-label">{block.label}</span>

                            <h3 className="mt-5 text-lg font-semibold text-slate-100">
                                {block.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                {block.text}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}