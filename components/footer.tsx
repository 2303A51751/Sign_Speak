"use client";

import { Hand, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Hand className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-foreground">SignSpeak</span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Empowering communication for the deaf and mute community through accessible
              sign language education. Everyone deserves to be understood.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/alphabet" className="text-muted-foreground hover:text-primary transition-colors">
                  ASL Alphabet
                </Link>
              </li>
              <li>
                <Link href="/phrases" className="text-muted-foreground hover:text-primary transition-colors">
                  Common Phrases
                </Link>
              </li>
              <li>
                <Link href="/translator" className="text-muted-foreground hover:text-primary transition-colors">
                  Text Translator
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-muted-foreground hover:text-primary transition-colors">
                  Take a Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">ASL Dictionary</span>
              </li>
              <li>
                <span className="text-muted-foreground">Video Tutorials</span>
              </li>
              <li>
                <span className="text-muted-foreground">Practice Exercises</span>
              </li>
              <li>
                <span className="text-muted-foreground">Community Forum</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SignSpeak. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> for the deaf and mute community
          </p>
        </div>
      </div>
    </footer>
  );
}
