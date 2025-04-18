import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    // Check for saved theme preference or use media query
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full hover:bg-muted transition-colors"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === 'light' ? 'opacity-100' : 'opacity-0 -rotate-90 scale-0 absolute'}`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === 'dark' ? 'opacity-100' : 'opacity-0 rotate-90 scale-0 absolute'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
