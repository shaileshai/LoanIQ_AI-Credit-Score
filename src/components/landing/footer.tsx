import Link from "next/link";
import { Github, Linkedin, Bot } from "lucide-react";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      aria-label="X"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931L18.901 1.153Zm-1.653 19.57h2.608L5.426 2.546H2.665l14.582 18.177Z" />
    </svg>
);


const Footer = () => {
    return (
        <footer className="bg-background/50 border-t border-primary/20">
            <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-accent"/>
                    <p className="text-foreground/70 text-sm font-headline">
                        CreditIntel.AI &copy; {new Date().getFullYear()}
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="#" aria-label="X">
                        <XIcon className="w-5 h-5 fill-foreground/70 hover:fill-accent transition-colors" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
                    <Link href="#" aria-label="GitHub"><Github className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;