import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const teamMember = {
  name: 'Shailesh Tripathi',
  role: 'Founder & CEO',
  bio: 'Visionary leader with 15+ years in Fintech & Business Intelligence passionate about leveraging AI to create equitable financial systems.',
  social: {
    linkedin: 'https://www.linkedin.com/in/shaileshtripathi003/',
    github: 'https://github.com/shailesht003',
  },
};

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">The Team Behind the Innovation</h2>
          <p className="mt-4 text-lg text-foreground/70">
            We are a mission-driven team of fintech veterans, AI researchers, and security experts dedicated to building a fairer financial future.
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-background/40 border-primary/20 shadow-xl shadow-primary/10 overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{teamMember.name}</h3>
              <p className="text-accent font-semibold mt-1">{teamMember.role}</p>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                {teamMember.bio}
              </p>
              <div className="flex gap-4 mt-6">
                <Link href={teamMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href={teamMember.social.github} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
