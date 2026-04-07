const links = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "stack", href: "#stack" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-cyan-200/10 bg-slate-950/70 backdrop-blur-md">
            <div className="mx-auto flex w-[92%] max-w-350 items-center justify-between py-4">
                <a
                    href="#home"
                    className="inline-flex items-center gap-3 font-heading text-sm uppercase tracking-[0.24em] text-slate-100"
                >
                    <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(186,230,253,0.8)]" />
                    João Reis
                </a>

                <nav className="hidden items-center gap-3 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="rounded-lg border border-cyan-200/10 bg-slate-900/50 px-3 py-2 font-heading text-[0.72rem] uppercase tracking-[0.18em] text-slate-300 transition-all duration-300 hover:border-cyan-200/20 hover:text-orange-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}