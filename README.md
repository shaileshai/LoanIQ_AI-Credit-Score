# CreditIntel.AI — Agentic AI Credit Scoring

AI-powered credit scoring platform with a multi-agent system for eligibility assessment, risk analysis, and loan recommendations.

![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![GenKit](https://img.shields.io/badge/Firebase_GenKit-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

## Overview

CreditIntel.AI uses an **agentic AI architecture** where specialized agents collaborate to deliver accurate credit assessments:

| Agent | Role |
|-------|------|
| **Eligibility Agent** | Validates applicant eligibility criteria |
| **Analysis Agent** | Analyzes financial data and credit history |
| **Risk Agent** | Assesses risk factors and probability of default |
| **Recommendation Agent** | Generates loan recommendations with terms |

## Features

- **Multi-Agent Workflow** — Animated visualization of the agent pipeline processing credit applications
- **Interactive Dashboard** — Real-time scoring demo with live agent status
- **AI-Powered Copy** — Dynamic headline and subtext generation optimized for fintech
- **Waitlist & Demo Request** — Lead capture with contact form integration
- **Roadmap Timeline** — Q3 Pilot through Q4 Launch milestones

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js, React, TypeScript |
| **AI** | Firebase GenKit, Agentic AI |
| **Styling** | Tailwind CSS, Space Grotesk + Inter fonts |
| **UI** | Parallax scrolling, particle effects, glowing neumorphic elements |
| **Components** | Radix UI, Lucide Icons |

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```
src/
├── ai/                  # GenKit AI flows and configuration
│   ├── flows/           # AI generation flows (landing page copy)
│   └── genkit.ts        # GenKit setup
├── app/                 # Next.js pages
│   ├── Dashboard/       # Interactive credit scoring dashboard
│   ├── About/           # Company information
│   ├── Features/        # Platform capabilities
│   ├── Product/         # Product details
│   └── Contact/         # Contact form
└── components/
    └── landing/         # Landing page sections
        ├── hero.tsx     # Hero with animated agent workflow
        ├── dashboard-demo.tsx
        ├── features.tsx
        ├── how-it-works.tsx
        └── timeline.tsx
```
