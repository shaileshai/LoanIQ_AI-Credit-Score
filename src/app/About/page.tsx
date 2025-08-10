"use client"

import Navbar from '@/components/navigation/navbar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, Users, Target, Shield, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  const team = [
    {
      name: "Shailesh Tripathi",
      role: "Founder CEO",
      bio: "15+ years experience in Fintech & Business Intelligence passionate about creating equitable financial systems.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "AI/ML expert with background in financial services and risk modeling",
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Data Scientist",
      bio: "PhD in Computational Finance, published researcher in credit risk AI",
      avatar: "EW"
    }
  ]

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Transparency First",
      description: "Every AI decision is explainable and auditable, ensuring complete transparency in credit scoring."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Financial Inclusion",
      description: "Democratizing access to credit through fair, unbiased AI that serves underserved communities."
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Precision & Accuracy",
      description: "Continuously learning algorithms that improve decision accuracy while reducing risk."
    },
    {
      icon: <Award className="w-8 h-8 text-green-400" />,
      title: "Ethical AI",
      description: "Rigorous testing for bias and fairness, ensuring responsible AI deployment in finance."
    }
  ]

  const milestones = [
    { year: "2024 Q2", event: "LoanIQ Founded", description: "Started with a mission to transform credit decisions" },
    { year: "2025 Q3", event: "First Beta Launch", description: "Released AI platform to select financial partners" },
    { year: "2025 Q4", event: "Series A Funding", description: "Secured $12M to scale our AI technology" },
    { year: "2026 Q2", event: "500+ Clients", description: "Trusted by credit unions, banks, and fintechs nationwide" },
    { year: "2026 Q4", event: "Next Generation AI", description: "Launching advanced agentic AI for real-time decisions" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <Navbar />
      <main>
        {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
              Transforming Credit Decisions with
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Responsible AI</span>
            </h1>
            <p className="mt-6 text-xl text-foreground/70 leading-relaxed">
              Founded by former credit risk leaders and AI experts, LoanIQ is building the future 
              of fair, transparent, and intelligent credit scoring for financial institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Mission</h2>
              <p className="text-lg text-foreground/70 mb-6">
                To democratize access to fair credit through transparent, explainable AI that serves 
                both lenders and borrowers. We're making credit decisions faster, more accurate, 
                and accessible to underserved communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">Reduce loan processing time from weeks to minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">Increase approval rates for qualified borrowers by 40%</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">Eliminate bias through fair lending algorithms</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-card/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-foreground/70">Financial Institutions</div>
                </div>
                <div className="text-center mt-6">
                  <div className="text-4xl font-bold text-primary mb-2">99.7%</div>
                  <div className="text-foreground/70">Decision Accuracy</div>
                </div>
                <div className="text-center mt-6">
                  <div className="text-4xl font-bold text-primary mb-2">$2.8B+</div>
                  <div className="text-foreground/70">Loans Processed</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              These principles guide every decision we make and every product we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              From startup to serving 500+ financial institutions in just four years.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                    {milestone.year}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold">{milestone.event}</h3>
                    <p className="text-foreground/70 mt-1">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Industry veterans combining decades of credit risk expertise with cutting-edge AI innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-foreground/70">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline mb-6">
              Ready to Transform Your Credit Process?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Join hundreds of financial institutions already using LoanIQ to make smarter, 
              faster, and fairer credit decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                asChild
              >
                <Link href="/Dashboard">Request Demo</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg font-semibold border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <Link href="/Contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default About