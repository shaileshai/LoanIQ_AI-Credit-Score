'use server';

export async function getPolicyUpdate() {
  // Mock implementation for demo purposes
  return {
    policy: {
      id: 'policy-001',
      name: 'Standard Credit Policy',
      version: '2.1.0',
      lastUpdated: new Date().toISOString(),
      rules: [
        {
          id: 'rule-001',
          name: 'Credit Score Threshold',
          condition: 'credit_score >= 650',
          weight: 0.3,
        },
        {
          id: 'rule-002',
          name: 'Debt-to-Income Ratio',
          condition: 'dti <= 0.43',
          weight: 0.25,
        },
        {
          id: 'rule-003',
          name: 'Employment Stability',
          condition: 'employment_months >= 24',
          weight: 0.2,
        },
      ],
    },
    lastUpdate: new Date().toISOString(),
  };
}

export async function calculateSmartScore(data: {
  creditScore: number;
  income: number;
  debt: number;
  employmentMonths: number;
}) {
  // Mock calculation based on the provided data
  const { creditScore, income, debt, employmentMonths } = data;
  
  // Simple scoring algorithm for demo
  let score = 300;
  
  // Credit score contribution (max 250 points)
  score += Math.min((creditScore - 300) * 1.25, 250);
  
  // Debt-to-income ratio contribution (max 200 points)
  const dti = debt / income;
  score += Math.max(200 - (dti * 400), 0);
  
  // Employment stability contribution (max 150 points)
  score += Math.min(employmentMonths * 2.5, 150);
  
  // Ensure score is within 300-850 range
  score = Math.max(300, Math.min(850, Math.round(score)));
  
  return {
    score,
    riskLevel: score >= 700 ? 'Low' : score >= 600 ? 'Medium' : 'High',
    factors: [
      { name: 'Credit Score', value: creditScore, impact: 'High' },
      { name: 'Debt-to-Income', value: `${(dti * 100).toFixed(1)}%`, impact: 'Medium' },
      { name: 'Employment Duration', value: `${employmentMonths} months`, impact: 'Medium' },
    ],
  };
}