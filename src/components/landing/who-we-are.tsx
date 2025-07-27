import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Co-Founder & CEO',
    bio: 'Visionary leader with 15+ years in fintech, passionate about leveraging AI to create equitable financial systems.',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Dr. Evelyn Reed',
    role: 'Co-Founder & Chief Scientist',
    bio: 'PhD in Computer Science with a focus on machine learning and ethical AI. The architect of our multi-agent system.',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'scientist headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Ben Carter',
    role: 'VP of Engineering',
    bio: 'Expert in building scalable, secure, and compliant cloud infrastructures for the financial industry.',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'engineer headshot',
    social: {
      linkedin: '#',
      twitter: '#',
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg shadow-primary/5 border border-primary/10 transition-all duration-300 hover:shadow-accent/20 hover:scale-105 hover:-translate-y-2">
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
                  <Link href={member.social.twitter}><Twitter className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" /></Link>
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
