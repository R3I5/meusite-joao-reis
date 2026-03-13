import cat from "../assets/cat.png";
export function HeroSection() {

    return (
        <section className="hero flex items-center justify-center">
            <div className="container flex flex-col gap-xl">
                <div className="hero-top flex items-center justify-between">
                    <div className="text-left">
                        <h1 className="hero-title">
                            JOÃO <br /> <span className="texto-destaque">REIS</span>
                        </h1>
                    </div>
                    <div>
                        <img src={cat} alt="Foto Provisória" style={{ width: '300px', borderRadius: '16px' }}/>
                    </div>
                </div>
                <div className="hero-bottom flex justify-center text-center">
                    <p className="hero-subtitle">
                        software engineering student building <br/>
                        <span className="texto-destaque">creative</span> and <span className="texto-destaque">technical</span> digital experiences.
                    </p>
                </div>
            </div>            
        </section>

    )
}