'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Bot, DatabaseZap, Gauge, BadgePercent, CheckCircle, MoveRight } from 'lucide-react';
import { AnimatedNumber } from '@/components/animated-number';
import { getPolicyUpdate } from '@/app/actions';
import { cn } from '@/lib/utils';

const bots = [
  { name: 'Supervisor Bot', icon: Bot },
  { name: 'Data Enrichment Bot', icon: DatabaseZap },
  { name: 'Risk Assessment Bot', icon: Gauge },
  { name: 'Interest Rate Bot', icon: BadgePercent },
  { name: 'Final Decision Bot', icon: CheckCircle },
];

export default function DashboardClient() {
  const [loanAmount, setLoanAmount] = useState('5000');
  const [loanTerm, setLoanTerm] = useState('36');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeBotIndex, setActiveBotIndex] = useState(-1);
  const [smartScore, setSmartScore] = useState(0);
  const [interestRate, setInterestRate] = useState(12.5);
  const [policyUpdate, setPolicyUpdate] = useState('');

  const fetchPolicyUpdate = async () => {
    const update = await getPolicyUpdate();
    setPolicyUpdate(`Policy ${update.policy.name} v${update.policy.version} updated ${new Date(update.lastUpdate).toLocaleTimeString()}`);
  };

  const [decision, setDecision] = useState<'Approved' | 'Pending' | 'Denied' | null>(null);

  useEffect(() => {
    fetchPolicyUpdate();
    const interval = setInterval(fetchPolicyUpdate, 10000); // every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handleAnalysis = async () => {
    setIsProcessing(true);
    setSmartScore(0);
    setInterestRate(12.5);
    setActiveBotIndex(-1);
    setDecision(null);

    for (let i = 0; i < bots.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setActiveBotIndex(i);
    }
    
    await new Promise((resolve) => setTimeout(resolve, 500));

    const finalScore = Math.floor(Math.random() * (850 - 550 + 1) + 550);
    setSmartScore(finalScore);

    const finalRate = 25 - (finalScore / 850) * 20;
    setInterestRate(parseFloat(finalRate.toFixed(2)));
    
    if (finalScore > 720) setDecision('Approved');
    else if (finalScore > 620) setDecision('Pending');
    else setDecision('Denied');

    setIsProcessing(false);
  };

  const getDecisionColor = () => {
    if (decision === 'Approved') return 'text-green-400';
    if (decision === 'Pending') return 'text-yellow-400';
    if (decision === 'Denied') return 'text-red-400';
    return 'text-muted-foreground';
  };

  return (
    <>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10">
          <CardHeader>
            <CardTitle>Loan Application</CardTitle>
            <CardDescription>Enter details to simulate analysis.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount">Loan Amount ($)</Label>
              <Input id="amount" placeholder="e.g. 10000" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="term">Loan Term (Months)</Label>
              <Input id="term" placeholder="e.g. 36" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
            </div>
            <Button onClick={handleAnalysis} disabled={isProcessing} className="w-full">
              {isProcessing ? 'Analyzing...' : 'Analyze Credit Risk'}
            </Button>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3 bg-card/50 backdrop-blur-sm border-primary/10 flex flex-col">
          <CardHeader>
            <CardTitle>AI Decision Panel</CardTitle>
            <CardDescription>Real-time insights from our AI bots.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">AI Bot Status:</p>
              <div className="flex flex-wrap gap-4 items-center">
                {bots.map((bot, index) => (
                  <div key={bot.name} className={cn("flex items-center gap-2 p-2 rounded-lg transition-all", activeBotIndex >= index ? "bg-primary/20 text-primary" : "bg-muted/50")}>
                    <bot.icon className="h-5 w-5" />
                    <span className="text-sm">{bot.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">SmartScore</p>
                <div className="text-5xl font-bold text-primary mt-1">
                  {isProcessing ? '...' : <AnimatedNumber value={smartScore} />}
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">Decision</p>
                <div className={cn("text-5xl font-bold mt-1", getDecisionColor())}>
                  {decision || '---'}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Label>Simulated Interest Rate: {interestRate}%</Label>
              <Slider
                value={[interestRate]}
                max={25}
                min={5}
                step={0.1}
                className="mt-2"
                disabled
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-background/80 backdrop-blur-sm border-t border-primary/20 overflow-hidden z-40">
        <div className="absolute top-0 h-full flex items-center animate-[ticker_20s_linear_infinite]">
          <p className="text-gray-500 whitespace-nowrap px-4 flex items-center">
            <span className="font-bold mr-2">Live Policy Update:</span>
            <span>{policyUpdate}</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}
