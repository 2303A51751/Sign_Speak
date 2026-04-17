"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { alphabet, phrases } from "@/lib/asl-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  ArrowLeft, 
  BookOpen, 
  MessageCircle, 
  Shuffle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  Sparkles,
  Target,
  Clock
} from "lucide-react";

type QuizType = "alphabet" | "phrases" | "mixed" | null;
type QuizState = "selecting" | "playing" | "finished";

interface Question {
  type: "alphabet" | "phrase";
  image: string;
  correctAnswer: string;
  options: string[];
  description: string;
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function generateQuestions(type: QuizType, count: number = 10): Question[] {
  const questions: Question[] = [];
  
  if (type === "alphabet" || type === "mixed") {
    const shuffledAlphabet = shuffleArray(alphabet);
    const alphabetCount = type === "mixed" ? Math.ceil(count / 2) : count;
    
    for (let i = 0; i < Math.min(alphabetCount, shuffledAlphabet.length); i++) {
      const correct = shuffledAlphabet[i];
      const wrongOptions = shuffleArray(
        alphabet.filter((l) => l.letter !== correct.letter)
      ).slice(0, 3);
      
      questions.push({
        type: "alphabet",
        image: correct.image,
        correctAnswer: correct.letter,
        options: shuffleArray([correct.letter, ...wrongOptions.map((o) => o.letter)]),
        description: correct.description,
      });
    }
  }
  
  if (type === "phrases" || type === "mixed") {
    const shuffledPhrases = shuffleArray(phrases);
    const phraseCount = type === "mixed" ? Math.floor(count / 2) : count;
    
    for (let i = 0; i < Math.min(phraseCount, shuffledPhrases.length); i++) {
      const correct = shuffledPhrases[i];
      const wrongOptions = shuffleArray(
        phrases.filter((p) => p.word !== correct.word)
      ).slice(0, 3);
      
      questions.push({
        type: "phrase",
        image: correct.image,
        correctAnswer: correct.word,
        options: shuffleArray([correct.word, ...wrongOptions.map((o) => o.word)]),
        description: correct.description,
      });
    }
  }
  
  return shuffleArray(questions).slice(0, count);
}

export default function QuizPage() {
  const [quizType, setQuizType] = useState<QuizType>(null);
  const [quizState, setQuizState] = useState<QuizState>("selecting");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Array<{ question: Question; userAnswer: string; correct: boolean }>>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const startQuiz = useCallback((type: QuizType) => {
    setQuizType(type);
    setQuestions(generateQuestions(type, 10));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setAnswers([]);
    setQuizState("playing");
  }, []);

  const handleAnswer = useCallback((answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    
    setAnswers((prev) => [
      ...prev,
      { question: currentQuestion, userAnswer: answer, correct: isCorrect },
    ]);
  }, [isAnswered, currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizState("finished");
    }
  }, [currentQuestionIndex, questions.length]);

  const restartQuiz = useCallback(() => {
    startQuiz(quizType);
  }, [quizType, startQuiz]);

  const backToSelection = useCallback(() => {
    setQuizState("selecting");
    setQuizType(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setAnswers([]);
  }, []);

  const scorePercentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-violet-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-2xl bg-violet-500 flex items-center justify-center text-white">
                <Trophy className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Sign Language Quiz
                </h1>
                <p className="text-muted-foreground">Test your knowledge</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Put your sign language skills to the test! Choose a quiz type and see how many signs you can identify correctly.
            </p>
          </div>
        </section>

        {/* Quiz Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {quizState === "selecting" && (
              <QuizSelection onStart={startQuiz} />
            )}

            {quizState === "playing" && currentQuestion && (
              <QuizQuestion
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
                progress={progress}
                selectedAnswer={selectedAnswer}
                isAnswered={isAnswered}
                onAnswer={handleAnswer}
                onNext={nextQuestion}
              />
            )}

            {quizState === "finished" && (
              <QuizResults
                score={score}
                totalQuestions={questions.length}
                scorePercentage={scorePercentage}
                answers={answers}
                onRestart={restartQuiz}
                onBackToSelection={backToSelection}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function QuizSelection({ onStart }: { onStart: (type: QuizType) => void }) {
  const quizTypes = [
    {
      type: "alphabet" as QuizType,
      icon: <BookOpen className="h-8 w-8" />,
      title: "Alphabet Quiz",
      description: "Test your knowledge of the ASL alphabet. Identify letters from hand signs.",
      color: "bg-teal-500",
      questions: "10 questions",
    },
    {
      type: "phrases" as QuizType,
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Phrases Quiz",
      description: "Identify common phrases and expressions from their signs.",
      color: "bg-coral-500",
      questions: "10 questions",
    },
    {
      type: "mixed" as QuizType,
      icon: <Shuffle className="h-8 w-8" />,
      title: "Mixed Quiz",
      description: "A combination of both alphabet letters and common phrases.",
      color: "bg-violet-500",
      questions: "10 questions",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">Choose Your Quiz</h2>
        <p className="text-muted-foreground">
          Select a quiz type to begin testing your sign language knowledge
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {quizTypes.map((quiz) => (
          <button
            key={quiz.type}
            onClick={() => onStart(quiz.type)}
            className="text-left focus:outline-none"
          >
            <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/50 group h-full">
              <CardContent className="p-6 text-center">
                <div className={`h-16 w-16 rounded-2xl ${quiz.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {quiz.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{quiz.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{quiz.description}</p>
                <Badge variant="secondary">{quiz.questions}</Badge>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
            <Target className="h-6 w-6" />
          </div>
          <h4 className="font-semibold text-foreground">Multiple Choice</h4>
          <p className="text-sm text-muted-foreground">4 options per question</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
            <Clock className="h-6 w-6" />
          </div>
          <h4 className="font-semibold text-foreground">No Time Limit</h4>
          <p className="text-sm text-muted-foreground">Take your time to learn</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
            <Sparkles className="h-6 w-6" />
          </div>
          <h4 className="font-semibold text-foreground">Instant Feedback</h4>
          <p className="text-sm text-muted-foreground">Learn from your answers</p>
        </div>
      </div>
    </div>
  );
}

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  progress: number;
  selectedAnswer: string | null;
  isAnswered: boolean;
  onAnswer: (answer: string) => void;
  onNext: () => void;
}

function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  progress,
  selectedAnswer,
  isAnswered,
  onAnswer,
  onNext,
}: QuizQuestionProps) {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {questionNumber} of {totalQuestions}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="border-2">
        <CardHeader className="text-center">
          <Badge variant="outline" className="w-fit mx-auto mb-2">
            {question.type === "alphabet" ? "Letter" : "Phrase"}
          </Badge>
          <CardTitle className="text-xl">What sign is this?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sign Image */}
          <div className="relative aspect-square max-w-xs mx-auto rounded-xl overflow-hidden bg-muted">
            <Image
              src={question.image}
              alt="Sign to identify"
              fill
              className="object-cover"
            />
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-2 gap-3">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrectOption = option === question.correctAnswer;
              
              let buttonClass = "h-auto py-4 text-lg font-medium border-2 transition-all ";
              
              if (isAnswered) {
                if (isCorrectOption) {
                  buttonClass += "border-green-500 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300";
                } else if (isSelected && !isCorrectOption) {
                  buttonClass += "border-red-500 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300";
                } else {
                  buttonClass += "border-muted opacity-50";
                }
              } else {
                buttonClass += "hover:border-primary hover:bg-primary/5";
              }

              return (
                <Button
                  key={option}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => onAnswer(option)}
                  disabled={isAnswered}
                >
                  {isAnswered && isCorrectOption && (
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                  )}
                  {isAnswered && isSelected && !isCorrectOption && (
                    <XCircle className="h-5 w-5 mr-2 text-red-500" />
                  )}
                  {option}
                </Button>
              );
            })}
          </div>

          {/* Feedback */}
          {isAnswered && (
            <div className={`p-4 rounded-lg ${isCorrect ? "bg-green-50 dark:bg-green-950" : "bg-amber-50 dark:bg-amber-950"}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-green-700 dark:text-green-300">Correct!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-amber-500" />
                    <span className="font-semibold text-amber-700 dark:text-amber-300">
                      The correct answer is: {question.correctAnswer}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{question.description}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <Button onClick={onNext} className="w-full" size="lg">
              {questionNumber === totalQuestions ? "See Results" : "Next Question"}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  scorePercentage: number;
  answers: Array<{ question: Question; userAnswer: string; correct: boolean }>;
  onRestart: () => void;
  onBackToSelection: () => void;
}

function QuizResults({
  score,
  totalQuestions,
  scorePercentage,
  answers,
  onRestart,
  onBackToSelection,
}: QuizResultsProps) {
  const getMessage = () => {
    if (scorePercentage >= 90) return { text: "Outstanding!", emoji: "Excellent work!" };
    if (scorePercentage >= 70) return { text: "Great Job!", emoji: "Keep it up!" };
    if (scorePercentage >= 50) return { text: "Good Effort!", emoji: "Practice more!" };
    return { text: "Keep Learning!", emoji: "You'll improve!" };
  };

  const message = getMessage();

  return (
    <div className="max-w-2xl mx-auto">
      {/* Results Card */}
      <Card className="border-2 mb-8">
        <CardContent className="p-8 text-center">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Trophy className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">{message.text}</h2>
          <p className="text-muted-foreground mb-6">{message.emoji}</p>
          
          <div className="flex items-center justify-center gap-8 mb-6">
            <div>
              <div className="text-4xl font-bold text-primary">{score}/{totalQuestions}</div>
              <div className="text-sm text-muted-foreground">Correct Answers</div>
            </div>
            <div className="h-16 w-px bg-border" />
            <div>
              <div className="text-4xl font-bold text-primary">{scorePercentage}%</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={onRestart} size="lg">
              <RotateCcw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={onBackToSelection} variant="outline" size="lg">
              Different Quiz
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Answer Review */}
      <Card>
        <CardHeader>
          <CardTitle>Review Your Answers</CardTitle>
          <CardDescription>See which questions you got right and wrong</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {answers.map((answer, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-3 rounded-lg ${
                  answer.correct ? "bg-green-50 dark:bg-green-950/30" : "bg-red-50 dark:bg-red-950/30"
                }`}
              >
                <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={answer.question.image}
                    alt="Sign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {answer.correct ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                    )}
                    <span className="font-medium text-foreground">
                      {answer.question.correctAnswer}
                    </span>
                  </div>
                  {!answer.correct && (
                    <p className="text-sm text-muted-foreground">
                      You answered: {answer.userAnswer}
                    </p>
                  )}
                </div>
                <Badge variant="outline" className="flex-shrink-0">
                  {answer.question.type === "alphabet" ? "Letter" : "Phrase"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
