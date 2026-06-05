import React from 'react';
import './styles/global.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import Ticker from './components/Ticker';
import Mission from './components/Mission';
import StorySection from './components/story/StorySection';
import VisualLinkedIn from './components/story/VisualLinkedIn';
import VisualMatch from './components/story/VisualMatch';
import VisualTailor from './components/story/VisualTailor';
import VisualPipeline from './components/story/VisualPipeline';
import DashboardSection from './components/dashboard/DashboardSection';
import Comparison from './components/comparison/Comparison';
import SocialProof from './components/social-proof/SocialProof';
import FinalCTA from './components/cta/FinalCTA';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Mission />

      <StorySection num={1} title={"Import any LinkedIn profile. Instantly."} side="right"
        body={"One click is all it takes. QPeakHire pulls the full profile — skills, experience, location, visa status — and structures it into a candidate record ready for matching. No forms. No copy-paste. Just import and go."}
        color="#1B3FFF" visual={<VisualLinkedIn/>} />

      <StorySection num={2} title={"AI that finds the right jobs, not just any jobs."} side="left"
        body={"Our match engine scans 50+ job boards continuously and scores every role against your candidate on 40+ signals: skills, years, location, salary, tech stack, visa. Only high-confidence matches surface. No noise, no wasted submissions."}
        color="#FF4D1C" visual={<VisualMatch/>} />

      <StorySection num={3} title={"Resumes tailored to the job. In 4 seconds."} side="right"
        body={"GPT-4 reads the job description, compares it to the candidate's experience, and rewrites the resume to maximize ATS score and relevance. Every change is shown. Human approval before submission. AI-tailored. Human-approved."}
        color="#F5A800" visual={<VisualTailor/>} />

      <StorySection num={4} title={"Full pipeline visibility. Every candidate, every stage."} side="left"
        body={"Kanban-style tracking across Prospect → Tailoring → Applied → Interview → Placed. Drag to move stages. Auto-updates on email replies and interview confirmations. Your entire bench — one screen."}
        color="#0DA882" visual={<VisualPipeline/>} />

      <DashboardSection />
      <Comparison />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </>
  );
}
