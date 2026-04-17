"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, phrases } from "@/lib/asl-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Layers, Users, Heart, AlertTriangle, Home, MessageSquare, ArrowLeft, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Greetings: <MessageSquare className="h-7 w-7" />,
  Basic: <Layers className="h-7 w-7" />,
  Emotions: <Heart className="h-7 w-7" />,
  Emergency: <AlertTriangle className="h-7 w-7" />,
  'Daily Life': <Home className="h-7 w-7" />,
  People: <Users className="h-7 w-7" />,
};

const colorMap: Record<string, string> = {
  Greetings: "bg-teal-500",
  Basic: "bg-blue-500",
  Emotions: "bg-pink-500",
  Emergency: "bg-red-500",
  'Daily Life': "bg-amber-500",
  People: "bg-violet-500",
};

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPhrase, setSelectedPhrase] = useState<typeof phrases[0] | null>(null);

  const categoryPhrases = selectedCategory 
    ? phrases.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-amber-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-2xl bg-amber-500 flex items-center justify-center text-white">
                <Layers className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Learning Categories
                </h1>
                <p className="text-muted-foreground">{categories.length} Topics to Explore</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our content is organized into categories to help you focus on specific areas of communication.
              Click on a category to view all signs within that topic.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {categories.map((category) => {
                const catPhrases = phrases.filter((p) => p.category === category.name);
                return (
                  <Card
                    key={category.name}
                    className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/50 group"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`h-14 w-14 rounded-xl ${colorMap[category.name]} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          {iconMap[category.name]}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{category.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {catPhrases.length} signs
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {catPhrases.slice(0, 3).map((phrase) => (
                          <Badge key={phrase.word} variant="outline" className="text-xs">
                            {phrase.word}
                          </Badge>
                        ))}
                        {catPhrases.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{catPhrases.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium">
                        View all signs <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category Detail Dialog */}
        <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
          <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-3">
                {selectedCategory && (
                  <div className={`h-10 w-10 rounded-lg ${colorMap[selectedCategory]} flex items-center justify-center text-white`}>
                    {iconMap[selectedCategory]}
                  </div>
                )}
                {selectedCategory}
              </DialogTitle>
              <DialogDescription>
                {categoryPhrases.length} signs in this category
              </DialogDescription>
            </DialogHeader>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {categoryPhrases.map((phrase) => (
                <Card 
                  key={phrase.word}
                  className="cursor-pointer hover:shadow-md transition-shadow border hover:border-primary/50"
                  onClick={() => setSelectedPhrase(phrase)}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={phrase.image}
                        alt={`ASL sign for ${phrase.word}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{phrase.word}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{phrase.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Phrase Detail Dialog */}
        <Dialog open={!!selectedPhrase} onOpenChange={() => setSelectedPhrase(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedPhrase?.word}</DialogTitle>
              <DialogDescription>
                <Badge variant="secondary" className="mt-1">{selectedPhrase?.category}</Badge>
              </DialogDescription>
            </DialogHeader>
            {selectedPhrase && (
              <div className="space-y-4">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={selectedPhrase.image}
                    alt={`ASL sign for ${selectedPhrase.word}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">How to Sign:</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedPhrase.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-muted-foreground mb-6">
              Take a quiz to see how well you remember signs from each category.
            </p>
            <Button size="lg" asChild>
              <Link href="/quiz">
                Take a Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
