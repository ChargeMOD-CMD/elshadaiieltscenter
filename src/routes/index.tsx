import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { AIMentor } from "@/components/AIMentor";
import { Success } from "@/components/Success";
import { MockTest } from "@/components/MockTest";
import { Enroll } from "@/components/Enroll";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/components/AIChatbot";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CursorEffect } from "@/components/CursorEffect";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELSHADAI IELTS CENTER — Unlock Your Global Future" },
      {
        name: "description",
        content:
          "Premium IELTS & communication training in Chennai. AI-powered mentorship, mock tests, and global study-abroad guidance.",
      },
      { property: "og:title", content: "ELSHADAI IELTS CENTER — Unlock Your Global Future" },
      {
        property: "og:description",
        content:
          "Premium IELTS coaching with an AI mentor, real exam simulation, and personalized success roadmaps.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <AIMentor />
        <Success />
        <MockTest />
        <Enroll />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
      <CursorEffect />
    </div>
  );
}
