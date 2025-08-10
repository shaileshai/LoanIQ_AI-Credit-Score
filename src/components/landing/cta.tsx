"use client";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card } from '@/components/ui/card';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

const Cta = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Waitlist submission:", values);
    toast({
      title: "Welcome to the future!",
      description: "You've been successfully added to the waitlist.",
    });
    form.reset();
  }

  return (
    <section id="cta" className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Experience the Future of Credit
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              See how LoanIQ AI transforms credit decisions with real-time insights, transparent scoring, and unprecedented accuracy. 
              Get hands-on with our interactive demo and discover what smarter lending looks like.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/80">Live dashboard simulation with real AI agents</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/80">Personalized walkthrough with our experts</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/80">No commitment required</p>
              </div>
            </div>
          </div>
          
          <Card className="bg-background/50 backdrop-blur-sm border-primary/20 p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
            <div className="space-y-4">
              <Button 
                onClick={() => window.location.href = '/Dashboard'}
                size="lg" 
                className="w-full h-12 text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 shadow-lg shadow-green-400/40 hover:shadow-xl hover:shadow-green-400/40 transition-all duration-300 transform hover:scale-105">
                Launch Interactive Demo
              </Button>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Enter your business email" 
                          {...field} 
                          className="h-12 bg-background/80 focus:ring-2 focus:ring-accent" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    )}
                  />
                  <Button type="submit" variant="secondary" className="w-full h-12 font-semibold">
                    Schedule Expert Demo
                  </Button>
                </form>
              </Form>
              
              <p className="text-center text-sm text-foreground/60">
                Join 500+ financial institutions already transforming their lending
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cta;
