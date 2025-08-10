import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ShieldCheck, Lock } from 'lucide-react';

import PageLayout from '@/components/navigation/page-layout';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground font-light">
              Ready to see LoanIQ AI in action? Fill out the form to request a personalized demo or to speak with one of our credit automation experts.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Enterprise-Grade Security</h3>
                  <p className="text-sm text-muted-foreground">Your data is protected with industry-leading security protocols.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SOC 2 Compliant</h3>
                  <p className="text-sm text-muted-foreground">Our platform meets rigorous standards for security and privacy.</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="w-full bg-card/50 backdrop-blur-sm border-primary/10">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contact Us</CardTitle>
              <CardDescription>We'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Evelyn Reed" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="evelyn@yourcompany.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you revolutionize your lending process?" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
