import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const LoanIQIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-accent"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 17L12 22L22 17" />
      <path d="M2 12L12 17L22 12" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );

const Footer = () => {
    return (
        <footer className="bg-background/50 border-t border-primary/20">
            <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <LoanIQIcon />
                    <p className="text-foreground/70 text-sm font-headline">
                        LoanIQ &copy; {new Date().getFullYear()}
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="https://www.linkedin.com/in/shaileshtripathi003/" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
                    <Link href="https://github.com/shailesht003" aria-label="GitHub"><Github className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
