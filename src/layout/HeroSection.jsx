import cat from "../assets/cat.png";
import { EnergyLines } from "../components/EnergyLines";
import { HeroLines } from "../components/HeroLines";

const signalItems = [
    "Java // Back-end",
    "C++ // Systems",
    "IoT // Embedded",
];

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative overflow-hidden scroll-mt-24 border-b border-cyan-200/10"
        >
            <HeroLines />
            <EnergyLines />

            <div className="relative z-10 mx-auto w-[92%] max-w-350 py-10 md:py-16 lg:py-20">
                <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                    <div className="pcb-panel pcb-grid-bg p-6 md:p-8 lg:p-10">
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <span className="pcb-label">BOOT PANEL</span>

                            <div className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100/70">
                                <span className="pcb-dot" />
                                Available for builds
                            </div>
                        </div>

                        <h1 className="font-heading text-[clamp(3.2rem,10vw,6.6rem)] leading-[0.9] tracking-tight text-white">
                            JOÃO
                            <br />
                            <span className="text-orange-300">REIS</span>
                        </h1>

                        <div className="pcb-divider my-6" />

                        <p className="max-w-190 text-base leading-8 text-slate-300 md:text-lg">
                            Software Engineering student focused on robust back-end systems
                            with <span className="text-cyan-100">Java</span>, while exploring
                            logic, performance and machine-level precision through{" "}
                            <span className="text-cyan-100">C++</span> and{" "}
                            <span className="text-cyan-100">Embedded Systems</span>.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#projects" className="pcb-button">
                                View Projects
                            </a>

                            <a href="#contact" className="pcb-button pcb-button--ghost">
                                Contact Channel
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {signalItems.map((item) => (
                                <span key={item} className="pcb-tag">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div className="pcb-panel p-5 md:p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="pcb-label">VISUAL MODULE</span>
                                <span className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-500">
                                    Portrait
                                </span>
                            </div>

                            <div className="rounded-xl border border-cyan-200/10 bg-slate-900/70 p-3">
                                <img
                                    src={cat}
                                    alt="Visual provisório do portfólio"
                                    className="h-80 w-full rounded-lg object-cover md:h-95"
                                />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                            <div className="pcb-panel p-4">
                                <span className="pcb-label">PATH</span>
                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    Back-end engineering, APIs, architecture and technical growth.
                                </p>
                            </div>

                            <div className="pcb-panel p-4">
                                <span className="pcb-label">SYSTEMS</span>
                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    Strong connection with C++, logic, performance and structure.
                                </p>
                            </div>

                            <div className="pcb-panel p-4">
                                <span className="pcb-label">LAB</span>
                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    Embedded exploration with IoT, sensors and hardware/software integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}