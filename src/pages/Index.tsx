import { useState } from 'react';
import { Shield, AlertTriangle, Brain, Mail, HelpCircle, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';
import SMSSimulation from '@/components/SMSSimulation';
import EmailSimulation from '@/components/EmailSimulation';
import PhishingPage from '@/components/PhishingPage';
import EducationalWarning from '@/components/EducationalWarning';
import DebitSimulation from '@/components/DebitSimulation';
import QuizSimulation from '@/components/QuizSimulation';
import SecurityTips from '@/components/SecurityTips';

type Step = 'intro' | 'sms' | 'email' | 'phishing' | 'warning' | 'debit' | 'quiz' | 'tips';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [userData, setUserData] = useState({ account: '', otp: '', password: '' });
  const { theme, setTheme } = useTheme();

  const resetSimulation = () => {
    setCurrentStep('intro');
    setUserData({ account: '', otp: '', password: '' });
  };

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4 transition-all duration-500">
        <div className="max-w-4xl mx-auto">
          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 transition-transform duration-300" />
              ) : (
                <Moon className="h-4 w-4 transition-transform duration-300" />
              )}
            </Button>
          </div>

          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-primary mr-3 animate-pulse" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Phishing Awareness Simulator
              </h1>
            </div>
            <Badge variant="secondary" className="mb-4 animate-scale-in">Educational Purpose Only</Badge>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn to identify and protect yourself from phishing attacks through this safe, educational simulation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 hover-scale transition-all duration-300 animate-fade-in">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-warning mb-2 transition-transform duration-300 hover:rotate-12" />
                <CardTitle>Recognize Threats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn to identify suspicious messages, emails, and websites that could be phishing attempts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Brain className="h-8 w-8 text-secondary mb-2 transition-transform duration-300 hover:rotate-12" />
                <CardTitle>Experience Safely</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Go through a realistic simulation in a completely safe environment with no real consequences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2 transition-transform duration-300 hover:rotate-12" />
                <CardTitle>Stay Protected</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn practical tips and best practices to protect yourself from real phishing attacks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-warning/10 border-warning/30 hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-warning mr-2 transition-transform duration-300 hover:rotate-12" />
                Important Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• This is a completely safe educational simulation</li>
                <li>• No real data will be transmitted or stored</li>
                <li>• All banking interfaces are fake and for demonstration only</li>
                <li>• The purpose is to educate about cybersecurity threats</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center mt-8 mb-16 space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg font-semibold text-primary mb-6">Choose Your Simulation Path:</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <Button 
                onClick={() => setCurrentStep('sms')} 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full group"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 mr-2">📱</span>
                SMS Phishing Demo
              </Button>
              <Button 
                onClick={() => setCurrentStep('email')} 
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/5 w-full group"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 mr-2">📧</span>
                Email Phishing Demo
              </Button>
              <Button 
                onClick={() => setCurrentStep('quiz')} 
                size="lg"
                variant="secondary"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg w-full group"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 mr-2">🧠</span>
                Security Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'sms') {
    return <SMSSimulation onNext={() => setCurrentStep('phishing')} />;
  }

  if (currentStep === 'email') {
    return <EmailSimulation onNext={() => setCurrentStep('phishing')} />;
  }

  if (currentStep === 'phishing') {
    return (
      <PhishingPage 
        onSubmit={(data) => {
          setUserData(data);
          setCurrentStep('warning');
        }} 
      />
    );
  }

  if (currentStep === 'warning') {
    return <EducationalWarning onNext={() => setCurrentStep('debit')} userData={userData} />;
  }

  if (currentStep === 'debit') {
    return <DebitSimulation onNext={() => setCurrentStep('tips')} />;
  }

  if (currentStep === 'quiz') {
    return <QuizSimulation onComplete={() => setCurrentStep('tips')} />;
  }

  if (currentStep === 'tips') {
    return <SecurityTips onRestart={resetSimulation} />;
  }

  return null;
};

export default Index;