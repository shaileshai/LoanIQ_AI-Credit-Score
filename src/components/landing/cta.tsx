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
    <section id="cta" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-gradient-to-br from-primary/20 via-background to-accent/20 p-8 md:p-12 border-primary/30 shadow-2xl shadow-primary/10">
            <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Join the Movement</h2>
            <p className="mt-4 text-lg text-foreground/70">Be among the first to access LoanIQ and redefine what's possible in credit scoring. Secure your spot on the waitlist or schedule a personalized demo with our team.</p>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem className="flex-grow">
                        <FormControl>
                        <Input placeholder="Enter your business email" {...field} className="h-12 text-lg bg-background/80 focus:ring-accent" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" size="lg" className="h-12 text-lg font-bold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 transition-shadow">Join Waitlist</Button>
                </form>
            </Form>
            </div>
        </Card>
      </div>
    </section>
  );
};

export default Cta;
