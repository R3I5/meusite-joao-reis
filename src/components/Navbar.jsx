import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/10"
          : "py-5 bg-transparent"
      )}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between relative">
        
        {/* 1. LOGO */}
        <a
          className="text-xl font-bold text-primary flex items-center shrink-0 z-50"
          href="#hero"
          onClick={closeMenu}
        >
          <span className="relative z-10">
          <span className="text-glow text-foreground">João Reis</span> Portfolio
          </span>
        </a>

        {/* 2. LINKS DESKTOP (Centralizados) */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* 3. CONTROLES (Direita) */}
        <div className="flex items-center gap-4 z-50">
          {/* ThemeToggle visível sempre */}
          <ThemeToggle />

          {/* Botão Hambúrguer (Só Mobile) */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 4. MENU MOBILE (Slide Down) */}
        <div
          className={cn(
            "fixed inset-0 w-full h-screen bg-background z-40 flex flex-col items-center justify-start pt-32 space-y-8",
            "transition-transform duration-300 ease-in-out",
            isMenuOpen
              ? "translate-y-0 opacity-100"       // Aberto: Desce e aparece
              : "-translate-y-full opacity-0"     // Fechado: Sobe e some
          )}
        >
          {navItems.map((item, Key) => (
            <a
              key={Key}
              href={item.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};