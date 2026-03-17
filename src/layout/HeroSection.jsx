import cat from "../assets/cat.png";

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden pt-25">
            <div className="mx-auto grid min-h-screen w-[90%] max-w-[1200px] grid-cols-12 grid-rows-[auto_1fr]">
                
                <div className="col-span-7 self-center">
                    <h1 className="font-heading text-[clamp(4rem,10vw,7rem)] leading-[0.9] tracking-tight text-white">
                        JOÃO
                        <br />
                        <span className="text-orange-400">REIS</span>
                    </h1>
                </div>

                <div className="col-span-5 flex items-center justify-center">
                    <img
                        src={cat}
                        alt="Foto Provisória"
                        className="w-[280px] rotate-[18deg] rounded-2xl object-cover shadow-2xl"
                    />
                </div>

                <div className="col-span-12 mt-8 max-w-[800px] justify-self-center text-center">
                    <p className="font-heading text-[clamp(1.4rem,2.4vw,2.4rem)] leading-relaxed text-white">
                        software engineering student building 
                        <span className="text-orange-400"> creative</span> and{" "}
                        <span className="text-orange-400">technical</span> digital experiences.
                    </p>
                </div>
            </div>
        </section>
    );
}