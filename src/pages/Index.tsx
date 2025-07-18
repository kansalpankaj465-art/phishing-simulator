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

          {/* Feature Card - Recognize Threats at top */}
          <div className="mb-8">
            <Card className="border-warning/30 bg-gradient-to-br from-warning/5 to-warning/10 hover:shadow-xl hover:shadow-warning/20 transition-all duration-500 hover:scale-[1.02] animate-fade-in">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-warning mb-4 mx-auto transition-transform duration-500 hover:rotate-12 hover:scale-110" />
                <CardTitle className="text-2xl">🚨 Recognize Threats</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg">
                  Learn to identify suspicious messages, emails, and websites that could be phishing attempts. This is your first line of defense!
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Brain className="h-8 w-8 text-secondary mb-2 transition-transform duration-500 hover:rotate-12 hover:scale-110" />
                <CardTitle>Experience Safely</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Go through a realistic simulation in a completely safe environment with no real consequences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2 transition-transform duration-500 hover:rotate-12 hover:scale-110" />
                <CardTitle>Stay Protected</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn practical tips and best practices to protect yourself from real phishing attacks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-warning/10 border-warning/30 hover:shadow-xl hover:shadow-warning/20 transition-all duration-500 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-warning mr-2 transition-transform duration-500 hover:rotate-12 hover:scale-110" />
                Important Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="transform transition-all duration-300 hover:translate-x-2">• This is a completely safe educational simulation</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">• No real data will be transmitted or stored</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">• All banking interfaces are fake and for demonstration only</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">• The purpose is to educate about cybersecurity threats</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center mt-12 mb-16 space-y-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="space-y-4">
              <p className="text-2xl font-bold text-primary mb-2">🚀 Choose Your Learning Path</p>
              <p className="text-muted-foreground">Select a simulation to begin your cybersecurity training</p>
            </div>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group">
                <Button 
                  onClick={() => setCurrentStep('sms')} 
                  size="lg"
                  className="w-full h-24 bg-gradient-to-br from-primary via-primary-glow to-secondary text-white shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform-gpu group-hover:rotate-1"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:animate-pulse">📱</span>
                    <span className="font-semibold text-lg">SMS Phishing</span>
                    <span className="text-xs opacity-90">Interactive Demo</span>
                  </div>
                </Button>
              </div>
              
              <div className="group">
                <Button 
                  onClick={() => setCurrentStep('email')} 
                  size="lg"
                  className="w-full h-24 bg-gradient-to-br from-secondary via-primary to-secondary-foreground text-white shadow-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform-gpu group-hover:rotate-1"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:animate-pulse">📧</span>
                    <span className="font-semibold text-lg">Email Phishing</span>
                    <span className="text-xs opacity-90">Interactive Demo</span>
                  </div>
                </Button>
              </div>
              
              <div className="group">
                <Button 
                  onClick={() => setCurrentStep('quiz')} 
                  size="lg"
                  className="w-full h-24 bg-gradient-to-br from-warning via-warning/80 to-primary text-white shadow-xl hover:shadow-2xl hover:shadow-warning/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform-gpu group-hover:rotate-1"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:animate-pulse">🧠</span>
                    <span className="font-semibold text-lg">Security Quiz</span>
                    <span className="text-xs opacity-90">Test Knowledge</span>
                  </div>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="animate-bounce">
                <p className="text-sm text-muted-foreground">👆 Click any option to start learning!</p>
              </div>
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