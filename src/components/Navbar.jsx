const links = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "projects", href: "#projects" },
    { name: "blog", href: "#blog" },
    { name: "contact", href: "#contact" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-md">
            <div className="mx-auto flex w-[90%] max-w-[1200px] items-center justify-between py-4">

                <div className="cursor-pointer font-heading text-[1.1rem] tracking-[0.05em]">
                    João Reis
                </div>

                <nav className="flex gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="group relative font-heading text-sm text-gray-400 transition-colors duration-300 hover:text-orange-400"
                        >
                            {link.name}

                            {/* linha animada */}
                            <span className="
                                absolute left-0 -bottom-1 h-[1px] w-0
                                bg-orange-400
                                transition-all duration-300
                                group-hover:w-full
                            "/>

                        </a>
                    ))}
                </nav>

            </div>
        </header>
    );
}