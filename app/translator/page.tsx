"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { alphabet, phrases } from "@/lib/asl-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Languages, Sparkles, X, Info, ArrowLeft, Lightbulb } from "lucide-react";

interface TranslatedSign {
  type: 'letter' | 'word' | 'space';
  value: string;
  image: string;
  description: string;
}

export default function TranslatorPage() {
  const [inputText, setInputText] = useState("");
  const [translatedSigns, setTranslatedSigns] = useState<TranslatedSign[]>([]);

  const translate = (text?: string | React.MouseEvent | React.KeyboardEvent) => {
    const textToTranslate = typeof text === 'string' ? text : inputText;
    if (!textToTranslate.trim()) return;

    const result: TranslatedSign[] = [];
    const words = textToTranslate.toUpperCase().split(/\s+/);
    const sortedPhrases = [...phrases].sort((a, b) => b.word.length - a.word.length);

    let i = 0;
    while (i < words.length) {
      let matched = false;
      
      // Try group sizes from 5 words down to 1 to match multi-word phrases greedily
      for (let j = Math.min(words.length - i, 5); j > 0; j--) {
        const candidate = words.slice(i, i + j).join(' ');
        const matchedPhrase = sortedPhrases.find(
          (p) => p.word.toUpperCase() === candidate || p.word.toUpperCase().replace(/\s+/g, '') === candidate
        );
        
        if (matchedPhrase) {
          result.push({
            type: 'word',
            value: matchedPhrase.word,
            image: matchedPhrase.image,
            description: matchedPhrase.description,
          });
          i += j;
          matched = true;
          break;
        }
      }

      if (!matched) {
        // Spell out the word letter by letter if no phrase matched
        const word = words[i];
        for (const char of word) {
          const letter = alphabet.find((l) => l.letter === char);
          if (letter) {
            result.push({
              type: 'letter',
              value: letter.letter,
              image: letter.image,
              description: letter.description,
            });
          }
        }
        i++;
      }
      
      // Add a space indicator between distinct words or phrases
      if (i < words.length) {
        result.push({
          type: 'space',
          value: ' ',
          image: '',
          description: 'Pause briefly between words',
        });
      }
    }

    setTranslatedSigns(result);
  };

  const clearTranslation = () => {
    setInputText("");
    setTranslatedSigns([]);
  };

  const suggestions = useMemo(() => {
    if (!inputText.trim()) return [];
    const input = inputText.toLowerCase();
    return phrases
      .filter((p) => p.word.toLowerCase().includes(input))
      .slice(0, 5);
  }, [inputText]);

  const exampleSentences = [
    "Hello Friend",
    "Thank You",
    "I Love You",
    "Please Help",
    "Yes",
    "No",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-emerald-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                <Languages className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Text to Sign Translator
                </h1>
                <p className="text-muted-foreground">Convert words to sign language</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Enter any text and see how to sign it. Known phrases will be shown as single signs,
              while other words will be spelled out letter by letter.
            </p>
          </div>
        </section>

        {/* Translator Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Enter Your Text
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a word or sentence (e.g., 'Hello friend' or 'Thank you')"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && translate()}
                      className="text-lg h-12"
                    />
                    {suggestions.length > 0 && inputText && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-popover border rounded-lg shadow-lg z-10">
                        {suggestions.map((s) => (
                          <button
                            key={s.word}
                            className="w-full px-4 py-2 text-left hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => {
                              setInputText(s.word);
                              translate(s.word);
                            }}
                          >
                            <span className="font-medium">{s.word}</span>
                            <span className="text-muted-foreground text-sm ml-2">({s.category})</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button onClick={translate} size="lg" className="h-12 px-8">
                    Translate
                  </Button>
                  {translatedSigns.length > 0 && (
                    <Button onClick={clearTranslation} size="lg" variant="outline" className="h-12">
                      <X className="h-5 w-5" />
                    </Button>
                  )}
                </div>

                {/* Quick Examples */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground">Try:</span>
                  {exampleSentences.map((example) => (
                    <button
                      key={example}
                      onClick={() => {
                        setInputText(example);
                        translate(example);
                      }}
                      className="text-sm px-3 py-1 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                    >
                      {example}
                    </button>
                  ))}
                </div>

                {translatedSigns.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Info className="h-4 w-4" />
                      <span>Click on any sign to see detailed instructions</span>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center p-6 bg-muted rounded-xl">
                      {translatedSigns.map((sign, index) => (
                        <SignCard key={`${sign.value}-${index}`} sign={sign} />
                      ))}
                    </div>
                  </div>
                )}

                {translatedSigns.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <Languages className="h-16 w-16 mx-auto mb-4 opacity-30" />
                    <p className="text-lg">Your translation will appear here</p>
                    <p className="text-sm mt-2">
                      Type a word or sentence and click Translate
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-amber-500" />
                Translation Tips
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Known Phrases</h3>
                    <p className="text-muted-foreground text-sm">
                      Words like &quot;Hello&quot;, &quot;Thank You&quot;, and &quot;Please&quot; are shown as single signs 
                      because they have their own ASL signs.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Fingerspelling</h3>
                    <p className="text-muted-foreground text-sm">
                      Words without a specific sign are spelled out letter by letter using 
                      the ASL alphabet.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Word Spacing</h3>
                    <p className="text-muted-foreground text-sm">
                      The vertical line between signs indicates a brief pause to separate 
                      different words.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Practice Makes Perfect</h3>
                    <p className="text-muted-foreground text-sm">
                      Try translating common sentences you use daily to build your 
                      signing vocabulary naturally.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function SignCard({ sign }: { sign: TranslatedSign }) {
  const [showDescription, setShowDescription] = useState(false);

  if (sign.type === 'space') {
    return (
      <div className="flex items-center justify-center w-8">
        <div className="w-1 h-16 bg-border rounded-full" />
      </div>
    );
  }

  return (
    <div
      className="relative cursor-pointer group"
      onClick={() => setShowDescription(!showDescription)}
    >
      <Card className="w-24 md:w-28 overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
        <div className="relative aspect-square bg-background">
          <Image
            src={sign.image}
            alt={`ASL sign for ${sign.value}`}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-2 text-center">
          <span className={`font-bold ${sign.type === 'word' ? 'text-primary text-sm' : 'text-foreground text-lg'}`}>
            {sign.value}
          </span>
          {sign.type === 'word' && (
            <span className="block text-xs text-muted-foreground">phrase</span>
          )}
        </CardContent>
      </Card>
      {showDescription && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-popover border rounded-lg shadow-xl z-20">
          <p className="text-sm text-popover-foreground">{sign.description}</p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-popover border-r border-b" />
        </div>
      )}
    </div>
  );
}
