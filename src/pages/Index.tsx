import { useState } from 'react';
import { Shield, AlertTriangle, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SMSSimulation from '@/components/SMSSimulation';
import PhishingPage from '@/components/PhishingPage';
import EducationalWarning from '@/components/EducationalWarning';
import DebitSimulation from '@/components/DebitSimulation';
import SecurityTips from '@/components/SecurityTips';

type Step = 'intro' | 'sms' | 'phishing' | 'warning' | 'debit' | 'tips';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [userData, setUserData] = useState({ account: '', otp: '', password: '' });

  const resetSimulation = () => {
    setCurrentStep('intro');
    setUserData({ account: '', otp: '', password: '' });
  };

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-primary mr-3" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Phishing Awareness Simulator
              </h1>
            </div>
            <Badge variant="secondary" className="mb-4">Educational Purpose Only</Badge>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn to identify and protect yourself from phishing attacks through this safe, educational simulation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-warning mb-2" />
                <CardTitle>Recognize Threats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn to identify suspicious messages, emails, and websites that could be phishing attempts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Experience Safely</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Go through a realistic simulation in a completely safe environment with no real consequences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Stay Protected</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn practical tips and best practices to protect yourself from real phishing attacks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-warning/10 border-warning/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-warning mr-2" />
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

          <div className="text-center mt-8">
            <Button 
              onClick={() => setCurrentStep('sms')} 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow"
            >
              Start Security Simulation
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'sms') {
    return <SMSSimulation onNext={() => setCurrentStep('phishing')} />;
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

  if (currentStep === 'tips') {
    return <SecurityTips onRestart={resetSimulation} />;
  }

  return null;
};

export default Index;