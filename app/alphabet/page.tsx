"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { alphabet } from "@/lib/asl-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BookOpen, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function AlphabetPage() {
  const [selectedLetter, setSelectedLetter] = useState<typeof alphabet[0] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLetter = (item: typeof alphabet[0], index: number) => {
    setSelectedLetter(item);
    setSelectedIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : alphabet.length - 1;
    setSelectedIndex(newIndex);
    setSelectedLetter(alphabet[newIndex]);
  };

  const goToNext = () => {
    const newIndex = selectedIndex < alphabet.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    setSelectedLetter(alphabet[newIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground">
                <BookOpen className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  ASL Alphabet
                </h1>
                <p className="text-muted-foreground">26 Letters to Master</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Click on any letter to see the hand sign and learn how to form it correctly. 
              Each letter includes a detailed description of hand positioning.
            </p>
          </div>
        </section>

        {/* Alphabet Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 gap-4">
              {alphabet.map((item, index) => (
                <Card
                  key={item.letter}
                  className="cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 hover:border-primary/50"
                  onClick={() => openLetter(item, index)}
                >
                  <CardContent className="p-3 flex flex-col items-center">
                    <div className="relative w-full aspect-square mb-2 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={`ASL sign for letter ${item.letter}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-2xl font-bold text-foreground">{item.letter}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Tips for Learning the Alphabet</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Practice Daily</h3>
                  <p className="text-muted-foreground text-sm">
                    Spend 10-15 minutes each day practicing the alphabet to build muscle memory.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Use a Mirror</h3>
                  <p className="text-muted-foreground text-sm">
                    Practice in front of a mirror to ensure your hand shapes match the images.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Spell Your Name</h3>
                  <p className="text-muted-foreground text-sm">
                    Start by learning to spell your name - it makes practice more personal and fun!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Letter Dialog */}
        <Dialog open={!!selectedLetter} onOpenChange={() => setSelectedLetter(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-3xl flex items-center gap-3">
                Letter {selectedLetter?.letter}
              </DialogTitle>
              <DialogDescription>
                Learn how to sign this letter correctly
              </DialogDescription>
            </DialogHeader>
            {selectedLetter && (
              <div className="space-y-4">
                <div className="relative aspect-square w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={selectedLetter.image}
                    alt={`ASL sign for letter ${selectedLetter.letter}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">How to Sign:</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedLetter.description}</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Button variant="outline" onClick={goToPrevious}>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {selectedIndex + 1} of {alphabet.length}
                  </span>
                  <Button variant="outline" onClick={goToNext}>
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-muted-foreground mb-6">
              Take a quiz to see how well you remember the alphabet signs.
            </p>
            <Button size="lg" asChild>
              <Link href="/quiz">
                Take the Alphabet Quiz
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
