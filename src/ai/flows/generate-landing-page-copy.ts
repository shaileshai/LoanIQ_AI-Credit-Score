'use server';

/**
 * @fileOverview A flow to generate concise, visionary headlines and subtext optimized for fintech industry leaders.
 *
 * - generateLandingPageCopy - A function that generates landing page copy.
 * - GenerateLandingPageCopyInput - The input type for the generateLandingPageCopy function.
 * - GenerateLandingPageCopyOutput - The return type for the generateLandingPageCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLandingPageCopyInputSchema = z.object({
  companyDescription: z
    .string()
    .describe('A description of the company and its mission.'),
  targetAudience: z.string().describe('The target audience for the landing page.'),
  keyFeatures: z.array(z.string()).describe('A list of key features to highlight.'),
  tone: z.string().describe('The desired tone of the copy (e.g., visionary, bold, clean).'),
});
export type GenerateLandingPageCopyInput = z.infer<
  typeof GenerateLandingPageCopyInputSchema
>;

const GenerateLandingPageCopyOutputSchema = z.object({
  heroHeadline: z.string().describe('A concise and visionary headline for the hero section.'),
  heroSubtext: z.string().describe('Informative subtext for the hero section.'),
  problemStatementHeadline: z
    .string()
    .describe('A headline for the problem statement section.'),
  problemStatementSubtext: z
    .string()
    .describe('Informative subtext for the problem statement section.'),
  solutionHeadline: z.string().describe('A headline for the solution section.'),
  solutionSubtext: z.string().describe('Informative subtext for the solution section.'),
  featuresHeadline: z.string().describe('A headline for the features section.'),
});
export type GenerateLandingPageCopyOutput = z.infer<
  typeof GenerateLandingPageCopyOutputSchema
>;

export async function generateLandingPageCopy(
  input: GenerateLandingPageCopyInput
): Promise<GenerateLandingPageCopyOutput> {
  return generateLandingPageCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLandingPageCopyPrompt',
  input: {schema: GenerateLandingPageCopyInputSchema},
  output: {schema: GenerateLandingPageCopyOutputSchema},
  prompt: `You are an AI-powered marketing copywriter specializing in generating high-impact landing page content for fintech companies.

  Based on the following information, generate compelling headlines and subtext for a landing page.

  Company Description: {{{companyDescription}}}
  Target Audience: {{{targetAudience}}}
  Key Features: {{#each keyFeatures}}- {{{this}}}\n{{/each}}
  Tone: {{{tone}}}

  Ensure the copy is concise, visionary, and optimized for fintech industry leaders. Focus on clarity and transformation.

  Here's the copy:
  Hero Headline: {{heroHeadline}}
  Hero Subtext: {{heroSubtext}}
  Problem Statement Headline: {{problemStatementHeadline}}
  Problem Statement Subtext: {{problemStatementSubtext}}
  Solution Headline: {{solutionHeadline}}
  Solution Subtext: {{solutionSubtext}}
  Features Headline: {{featuresHeadline}}`,
});

const generateLandingPageCopyFlow = ai.defineFlow(
  {
    name: 'generateLandingPageCopyFlow',
    inputSchema: GenerateLandingPageCopyInputSchema,
    outputSchema: GenerateLandingPageCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
