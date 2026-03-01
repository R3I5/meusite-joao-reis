import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
	return (
		<header className="py-4 px-4 bg-card border-b border-border">
			<div className="container mx-auto max-w-5xl flex items-center justify-between">
				<nav className="flex items-center gap-4">
					<a href="#hero" className="font-semibold">
						Home
					</a>
					<a href="#about" className="hover:text-primary">
						About
					</a>
					<a href="#skills" className="hover:text-primary">
						Skills
					</a>
					<a href="#projects" className="hover:text-primary">
						Projects
					</a>
					<a href="#contact" className="hover:text-primary">
						Contact
					</a>
				</nav>
				<div>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
