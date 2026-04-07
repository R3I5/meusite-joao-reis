const stackGroups = [
    {
        label: "BACK-END ENGINEERING",
        title: "Java",
        description:
            "Base principal para construir aplicações robustas, organizadas e orientadas a evolução. Aqui entram arquitetura, APIs, regras de negócio e persistência.",
        items: ["Java", "POO", "APIs", "SQL", "Arquitetura"],
    },
    {
        label: "SYSTEMS PROGRAMMING",
        title: "C++",
        description:
            "Espaço onde reforço precisão, estruturas, performance e pensamento mais próximo da máquina. É o lado que fortalece minha base lógica e técnica.",
        items: ["C++", "Lógica", "Estruturas", "Performance", "Baixo nível"],
    },
    {
        label: "EMBEDDED / IOT",
        title: "Hardware + Software",
        description:
            "Exploração de projetos conectando sensores, microcontroladores e interfaces. É a área onde software encontra o mundo físico de forma prática.",
        items: ["ESP32", "Sensores", "IoT", "Integração", "Protótipos"],
    },
];

export function StackSection() {
    return (
        <section
            id="stack"
            className="scroll-mt-24 border-b border-cyan-200/10 py-16 md:py-20"
        >
            <div className="mx-auto w-[92%] max-w-350">
                <div className="mb-6 pcb-panel p-6 md:p-8">
                    <span className="pcb-label">CORE STACK</span>

                    <h2 className="mt-5 font-heading text-3xl leading-tight text-white md:text-4xl">
                        Three technical fronts, one engineering direction.
                    </h2>

                    <p className="mt-5 max-w-225 text-base leading-8 text-slate-300">
                        Minha stack está organizada em três núcleos de competência: a
                        robustez do back-end com Java, a precisão estrutural do C++ e a
                        experimentação prática com sistemas embarcados.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {stackGroups.map((group) => (
                        <article key={group.label} className="pcb-panel pcb-grid-bg p-6">
                            <span className="pcb-label">{group.label}</span>

                            <h3 className="mt-5 font-heading text-2xl text-white">
                                {group.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                {group.description}
                            </p>

                            <div className="pcb-divider my-6" />

                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <span key={item} className="pcb-tag">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}