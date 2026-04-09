export function ContactSection() {
    return (
        <section id="contact" className="scroll-mt-24 py-16 md:py-20">
            <div className="mx-auto w-[92%] max-w-350">
                <div className="pcb-panel pcb-grid-bg p-6 md:p-8 lg:p-10">
                    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                        <div>
                            <span className="pcb-label">CONTACT CHANNEL</span>

                            <h2 className="mt-5 font-heading text-3xl leading-tight text-white md:text-4xl">
                                Let&apos;s build something consistent, technical and real.
                            </h2>

                            <p className="mt-6 max-w-180 text-base leading-8 text-slate-300">
                                Estou construindo minha trajetória em engenharia de software com
                                foco em back-end, estrutura e evolução técnica. Se quiser conversar
                                sobre projetos, carreira, software ou sistemas embarcados,
                                este é o lugar.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <a href="mailto:j.victor.reis20044@gmail.com" target="_blank" className="pcb-panel p-5 transition hover:border-cyan-200/20">
                                <span className="pcb-label">EMAIL</span>
                                <p className="mt-4 text-sm text-slate-200">
                                    j.victor.reis20044@gmail.com
                                </p>
                            </a>

                            <a href="https://github.com/R3I5" target="_blank" className="pcb-panel p-5 transition hover:border-cyan-200/20">
                                <span className="pcb-label">GITHUB</span>
                                <p className="mt-4 text-sm text-slate-200">
                                    https://github.com/R3I5
                                </p>
                            </a>

                            <a href="https://www.linkedin.com/in/joaovictordosreis/" target="_blank" className="pcb-panel p-5 transition hover:border-cyan-200/20">
                                <span className="pcb-label">LINKEDIN</span>
                                <p className="mt-4 text-sm text-slate-200">
                                    https://www.linkedin.com/in/joaovictordosreis/
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}