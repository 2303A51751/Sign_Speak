"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { phrases, categories } from "@/lib/asl-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";

export default function PhrasesPage() {
  const [selectedPhrase, setSelectedPhrase] = useState<typeof phrases[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Common Phrases
                </h1>
                <p className="text-muted-foreground">{phrases.length} Essential Signs</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Start communicating with these commonly used signs organized by category. 
              Each phrase includes step-by-step instructions for proper signing.
            </p>
          </div>
        </section>

        {/* Phrases Grid with Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
                <TabsTrigger 
                  value="all" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                >
                  All Phrases
                </TabsTrigger>
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.name}
                    value={cat.name}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {phrases.map((phrase) => (
                    <PhraseCard
                      key={phrase.word}
                      phrase={phrase}
                      onClick={() => setSelectedPhrase(phrase)}
                    />
                  ))}
                </div>
              </TabsContent>

              {categories.map((cat) => (
                <TabsContent key={cat.name} value={cat.name}>
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-foreground">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {phrases
                      .filter((p) => p.category === cat.name)
                      .map((phrase) => (
                        <PhraseCard
                          key={phrase.word}
                          phrase={phrase}
                          onClick={() => setSelectedPhrase(phrase)}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Phrase Dialog */}
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Practice These Phrases</h2>
            <p className="text-muted-foreground mb-6">
              Test your memory and see how many phrases you can identify correctly.
            </p>
            <Button size="lg" asChild>
              <Link href="/quiz">
                Take the Phrases Quiz
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

function PhraseCard({
  phrase,
  onClick,
}: {
  phrase: typeof phrases[0];
  onClick: () => void;
}) {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border-2 hover:border-primary/50 overflow-hidden"
      onClick={onClick}
    >
      <div className="relative aspect-video w-full bg-muted">
        <Image
          src={phrase.image}
          alt={`ASL sign for ${phrase.word}`}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground">{phrase.word}</h3>
          <Badge variant="outline" className="text-xs">
            {phrase.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {phrase.description}
        </p>
      </CardContent>
    </Card>
  );
}
