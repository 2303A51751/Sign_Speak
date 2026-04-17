"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  MessageCircle, 
  Languages, 
  Layers, 
  Trophy,
  ArrowRight,
  Heart,
  Users,
  Target,
  Accessibility,
  Zap,
  HandMetal
} from "lucide-react";

const navCards = [
  {
    href: "/alphabet",
    icon: <BookOpen className="h-8 w-8" />,
    title: "ASL Alphabet",
    description: "Learn all 26 letters with images and detailed hand position guides",
    color: "bg-teal-500",
    count: "26 Letters"
  },
  {
    href: "/phrases",
    icon: <MessageCircle className="h-8 w-8" />,
    title: "Common Phrases",
    description: "Master essential everyday phrases organized by category",
    color: "bg-coral-500",
    count: "11 Phrases"
  },
  {
    href: "/translator",
    icon: <Languages className="h-8 w-8" />,
    title: "Text Translator",
    description: "Convert any text into sign language visuals instantly",
    color: "bg-emerald-500",
    count: "Instant"
  },
  {
    href: "/categories",
    icon: <Layers className="h-8 w-8" />,
    title: "Categories",
    description: "Browse signs organized by topics like greetings, emotions, and more",
    color: "bg-amber-500",
    count: "6 Topics"
  },
  {
    href: "/quiz",
    icon: <Trophy className="h-8 w-8" />,
    title: "Take a Quiz",
    description: "Test your knowledge with interactive quizzes and track your progress",
    color: "bg-violet-500",
    count: "Multiple Levels"
  },
];

const features = [
  {
    icon: <BookOpen className="h-7 w-7" />,
    title: "Complete Alphabet",
    description: "Learn all 26 letters of the ASL alphabet with detailed images.",
  },
  {
    icon: <HandMetal className="h-7 w-7" />,
    title: "Common Phrases",
    description: "Master essential everyday phrases organized by category.",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Instant Translation",
    description: "Type any word and see the corresponding sign language.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Community Focused",
    description: "Built with input from the deaf and mute community.",
  },
  {
    icon: <Target className="h-7 w-7" />,
    title: "Step-by-Step Guide",
    description: "Clear instructions for each sign technique.",
  },
  {
    icon: <Accessibility className="h-7 w-7" />,
    title: "Fully Accessible",
    description: "Designed for learners of all abilities.",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Heart className="h-4 w-4" />
                  Inclusive Learning for Everyone
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Learn Sign Language with{" "}
                  <span className="text-primary">Confidence</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Empowering deaf and mute individuals with an interactive platform
                  to learn, practice, and communicate through American Sign Language.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8" asChild>
                    <Link href="/alphabet">Start Learning</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                    <Link href="/quiz">
                      Take a Quiz
                      <Trophy className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
                  <Image
                    src="/images/hero-hands.jpg"
                    alt="Diverse hands communicating through sign language"
                    fill
                    className="object-cover rounded-3xl relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Would You Like to Learn?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose a section to start your sign language journey
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {navCards.map((card) => (
                <Link key={card.href} href={card.href}>
                  <Card className="h-full border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                    <CardContent className="p-6">
                      <div className={`h-14 w-14 rounded-2xl ${card.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                        {card.icon}
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {card.title}
                        </h3>
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {card.count}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {card.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Get Started <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Why Learn with SignSpeak?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform is designed to make learning sign language intuitive, engaging, and effective.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 bg-card hover:shadow-lg transition-all duration-200 group"
                >
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
