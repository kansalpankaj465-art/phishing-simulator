import { useState } from 'react';
import { Shield, Users, BarChart3, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface QuizSimulationProps {
  onComplete: (score: number) => void;
}

const QuizSimulation = ({ onComplete }: QuizSimulationProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "You receive an SMS: 'Your account will be blocked in 2 hours. Click here to verify: bit.ly/bank123'. What should you do?",
      options: [
        "Click the link immediately to save my account",
        "Call my bank's official customer service number",
        "Forward the message to friends for advice",
        "Reply to the SMS asking for more details"
      ],
      correct: 1,
      explanation: "Always verify suspicious messages through official channels. Banks never send urgent links via SMS."
    },
    {
      question: "Which of these URLs is likely legitimate for State Bank of India?",
      options: [
        "https://secure-sbi-verify.com",
        "https://onlinesbi.sbi.co.in",
        "https://sbi-banking-secure.org",
        "https://sbibank-official.net"
      ],
      correct: 1,
      explanation: "Official SBI domain is sbi.co.in. Be wary of variations or different domains."
    },
    {
      question: "A caller says they're from your bank and asks for your OTP to 'verify your identity'. You should:",
      options: [
        "Provide the OTP since they called me",
        "Ask them to wait while I call back on the official number",
        "Give them my account number instead",
        "Hang up immediately and never share OTPs over phone"
      ],
      correct: 3,
      explanation: "Never share OTPs with anyone over phone calls. Banks never ask for OTPs to verify your identity."
    },
    {
      question: "What's the biggest red flag in this email: 'Dear Customer, You have won ₹50,000! Click here to claim your prize before it expires in 24 hours!'",
      options: [
        "It's addressed to 'Dear Customer'",
        "The urgent 24-hour deadline",
        "Unexpected prize announcement",
        "All of the above"
      ],
      correct: 3,
      explanation: "All these elements are classic phishing tactics: generic greeting, false urgency, and unexpected rewards."
    },
    {
      question: "Your friend forwards a message: 'Government is giving ₹2000 to everyone. Register here with Aadhaar: gov-benefit.in'. What do you do?",
      options: [
        "Register immediately before the offer ends",
        "Check official government websites first",
        "Ask my friend where they got this information",
        "Both B and C"
      ],
      correct: 3,
      explanation: "Always verify such claims through official government websites and question the source of information."
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex.toString()];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (parseInt(answer) === questions[index].correct ? 1 : 0);
      }, 0);
      setShowResult(true);
      setTimeout(() => onComplete(score), 3000);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 4) return 'text-green-600';
    if (score >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    if (score === 5) return "🎉 Excellent! You're well-protected against phishing!";
    if (score === 4) return "👍 Great job! Just a bit more awareness needed.";
    if (score === 3) return "⚠️ Good start, but please review the security tips.";
    return "🚨 High risk! Please take cybersecurity seriously.";
  };

  if (showResult) {
    const score = answers.reduce((acc, answer, index) => {
      return acc + (parseInt(answer) === questions[index].correct ? 1 : 0);
    }, 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center p-8">
            <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            
            <div className="mb-6">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(score)}`}>
                {score}/5
              </div>
              <p className="text-xl text-muted-foreground">
                {getScoreMessage(score)}
              </p>
            </div>

            <Progress value={(score / 5) * 100} className="mb-6" />

            <div className="text-sm text-muted-foreground">
              Redirecting to security tips in a moment...
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary">Security Awareness Quiz</Badge>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          <Progress value={((currentQuestion + 1) / questions.length) * 100} />
        </div>

        <Card className="p-8">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl leading-relaxed">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start h-auto p-4 text-wrap"
                  onClick={() => handleAnswer(index)}
                >
                  <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Take your time and choose the safest option
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizSimulation;