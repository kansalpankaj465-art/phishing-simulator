import { useState, useEffect, useRef } from 'react';
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
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const resetSimulation = () => {
    setCurrentStep('intro');
    setUserData({ account: '', otp: '', password: '' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    Object.values(cardRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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

          {/* Main Featured Card - Recognize Threats */}
          <div 
            id="threat-card"
            ref={el => cardRefs.current['threat-card'] = el}
            className={`mb-8 transform transition-all duration-700 ${
              visibleCards.has('threat-card') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Card className="relative overflow-hidden border-warning/30 bg-gradient-to-br from-warning/10 via-orange-50 to-red-50 dark:from-warning/20 dark:via-orange-900/20 dark:to-red-900/20 shadow-2xl hover:shadow-warning/25 transition-all duration-500 hover:scale-[1.02] rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warning/5 to-transparent animate-pulse"></div>
              <CardHeader className="text-center relative z-10 pb-2">
                <div className="mx-auto mb-4 p-4 bg-warning/20 rounded-full w-fit">
                  <AlertTriangle className="h-16 w-16 text-warning drop-shadow-lg" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-warning to-red-600 bg-clip-text text-transparent">
                  🚨 Recognize Threats First
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <CardDescription className="text-lg leading-relaxed">
                  <strong>Your first line of defense!</strong> Learn to spot suspicious messages, emails, and websites before they fool you. Knowledge is your best protection against phishing attacks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div 
              id="experience-card"
              ref={el => cardRefs.current['experience-card'] = el}
              className={`transform transition-all duration-700 delay-200 ${
                visibleCards.has('experience-card') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Card className="h-full border-primary/30 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.03] rounded-xl">
                <CardHeader>
                  <div className="p-3 bg-secondary/20 rounded-full w-fit mb-2">
                    <Brain className="h-10 w-10 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">🛡️ Experience Safely</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Practice with realistic simulations in a completely safe environment. No risk, just learning through hands-on experience.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div 
              id="protection-card"
              ref={el => cardRefs.current['protection-card'] = el}
              className={`transform transition-all duration-700 delay-300 ${
                visibleCards.has('protection-card') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Card className="h-full border-primary/30 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.03] rounded-xl">
                <CardHeader>
                  <div className="p-3 bg-primary/20 rounded-full w-fit mb-2">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">🔒 Stay Protected</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Master proven techniques and best practices to shield yourself from real-world phishing attempts and cyber threats.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <div 
            id="disclaimer-card"
            ref={el => cardRefs.current['disclaimer-card'] = el}
            className={`mb-12 transform transition-all duration-700 delay-400 ${
              visibleCards.has('disclaimer-card') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-warning/40 hover:shadow-xl hover:shadow-warning/20 transition-all duration-500 hover:scale-[1.01] rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-center">
                  <AlertTriangle className="h-6 w-6 text-warning mr-3" />
                  Important Safety Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-start space-x-2 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Completely safe educational simulation</span>
                  </li>
                  <li className="flex items-start space-x-2 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>No real data transmitted or stored</span>
                  </li>
                  <li className="flex items-start space-x-2 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>All banking interfaces are fake demos</span>
                  </li>
                  <li className="flex items-start space-x-2 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Educational cybersecurity purpose only</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* App-Style Simulation Buttons */}
          <div 
            id="app-buttons"
            ref={el => cardRefs.current['app-buttons'] = el}
            className={`text-center mb-16 transform transition-all duration-700 delay-500 ${
              visibleCards.has('app-buttons') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="space-y-6 mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                🎯 Choose Your Training App
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select an interactive cybersecurity training module to start your learning journey
              </p>
            </div>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* SMS App Button */}
              <div 
                className="group cursor-pointer"
                onClick={() => setCurrentStep('sms')}
              >
                <div className="relative p-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-3 transform-gpu">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                  <div className="relative z-10 flex flex-col items-center space-y-4 text-white">
                    <div className="text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      📱
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-1">SMS Security</h3>
                      <p className="text-blue-100 text-sm">Interactive Mobile Demo</p>
                      <div className="mt-3 px-4 py-1 bg-white/20 rounded-full text-xs">
                        Beginner Friendly
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Email App Button */}
              <div 
                className="group cursor-pointer"
                onClick={() => setCurrentStep('email')}
              >
                <div className="relative p-6 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-3 transform-gpu">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                  <div className="relative z-10 flex flex-col items-center space-y-4 text-white">
                    <div className="text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      📧
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-1">Email Shield</h3>
                      <p className="text-emerald-100 text-sm">Advanced Email Training</p>
                      <div className="mt-3 px-4 py-1 bg-white/20 rounded-full text-xs">
                        Intermediate
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Quiz App Button */}
              <div 
                className="group cursor-pointer"
                onClick={() => setCurrentStep('quiz')}
              >
                <div className="relative p-6 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-3 transform-gpu">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                  <div className="relative z-10 flex flex-col items-center space-y-4 text-white">
                    <div className="text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      🧠
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-1">Brain Trainer</h3>
                      <p className="text-orange-100 text-sm">Knowledge Assessment</p>
                      <div className="mt-3 px-4 py-1 bg-white/20 rounded-full text-xs">
                        Test Your Skills
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12 animate-bounce">
              <div className="px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <p className="text-primary font-medium">👆 Tap any app to begin your training!</p>
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