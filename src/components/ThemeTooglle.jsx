import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 focus:outline-none cursor-pointer"
            )}
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="h-6 w-6 text-primary transition-all" />
            ) : (
                <Moon className="h-6 w-6 text-primary transition-all" />
            )}
        </button>
    );
};