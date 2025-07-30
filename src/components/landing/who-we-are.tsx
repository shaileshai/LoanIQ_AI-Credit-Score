import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Shailesh Tripathi',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in Fintech & Business Intelligence passionate about leveraging AI to create equitable financial systems.',
    image: 'https://storage.googleapis.com/firebasestudio-hosting/images/shailesh-tripathi.jpg',
    dataAiHint: 'professional headshot',
    social: {
      linkedin: 'https://www.linkedin.com/in/shaileshtripathi003/',
      github: 'https://github.com/shailesht003',
    },
  },
];

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">The Team Behind the Innovation</h2>
          <p className="mt-4 text-lg text-foreground/70">
            We are a mission-driven team of fintech veterans, AI researchers, and security experts dedicated to building a fairer financial future.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-1 gap-8 justify-center">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg shadow-primary/5 border border-primary/10 transition-all duration-300 hover:shadow-accent/20 hover:scale-105 hover:-translate-y-2 max-w-sm mx-auto">
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mb-4 border-4 border-primary/20"
                data-ai-hint={member.dataAiHint}
              />
              <CardContent className="p-0">
                <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                <p className="text-accent font-semibold">{member.role}</p>
                <p className="mt-2 text-foreground/70 text-sm">{member.bio}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <Link href={member.social.linkedin}><Linkedin className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
                  <Link href={member.social.github}><Github className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
