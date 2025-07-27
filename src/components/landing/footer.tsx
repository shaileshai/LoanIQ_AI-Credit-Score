import Link from "next/link";
import { Github, Twitter, Linkedin, Bot } from "lucide-react";

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
                    <Link href="#" aria-label="Twitter"><Twitter className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
                    <Link href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
                    <Link href="#" aria-label="GitHub"><Github className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
