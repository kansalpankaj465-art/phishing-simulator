import { Shield, CheckCircle, Eye, Globe, Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SecurityTipsProps {
  onRestart: () => void;
}

const SecurityTips = ({ onRestart }: SecurityTipsProps) => {
  const tips = [
    {
      icon: Globe,
      title: "Check the URL Carefully",
      description: "Always verify the website URL. Banks use specific domains like sbi.co.in, not variations like secure-sbi-alert.in",
      example: "✅ https://onlinesbi.sbi.co.in vs ❌ https://secure-sbi-alert.in"
    },
    {
      icon: Phone,
      title: "Banks Never Ask for Sensitive Info",
      description: "Legitimate banks will NEVER ask for passwords, OTPs, or account details via SMS, email, or phone calls",
      example: "If in doubt, call your bank's official customer service number directly"
    },
    {
      icon: Eye,
      title: "Look for Security Indicators",
      description: "Check for SSL certificates (https://), proper spelling, and official branding before entering any information",
      example: "Look for the padlock icon in your browser's address bar"
    },
    {
      icon: AlertTriangle,
      title: "Beware of Urgency Tactics",
      description: "Scammers create false urgency. Take time to verify suspicious messages instead of acting immediately",
      example: "Phrases like 'verify immediately' or 'account will be blocked' are red flags"
    }
  ];

  const preventionSteps = [
    "Enable SMS alerts for all transactions",
    "Use official banking apps only",
    "Never click links in suspicious messages",
    "Keep your banking apps updated",
    "Use strong, unique passwords",
    "Enable two-factor authentication where available"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 to-primary/5 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-4">
            🛡️ How to Stay Protected
          </h1>
          <Badge variant="secondary" className="text-base px-4 py-2">Your Security Toolkit</Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {tips.map((tip, index) => (
            <Card key={index} className="border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3 text-base">
                  {tip.description}
                </CardDescription>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-mono">{tip.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8 bg-secondary/10 border-secondary/30">
          <CardHeader>
            <CardTitle className="flex items-center text-secondary">
              <CheckCircle className="h-5 w-5 mr-2" />
              Prevention Checklist
            </CardTitle>
            <CardDescription>Follow these steps to protect yourself</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {preventionSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-primary/10 border-primary/30">
          <CardHeader>
            <CardTitle className="text-primary">Remember: You Are the First Line of Defense</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base mb-4">
              Technology can help, but your awareness and caution are the most important factors in staying safe online. 
              When in doubt, always:
            </p>
            <div className="space-y-2">
              <p>🛑 <strong>Stop</strong> - Don't act on impulse</p>
              <p>🤔 <strong>Think</strong> - Is this request legitimate?</p>
              <p>📞 <strong>Verify</strong> - Contact your bank directly using official numbers</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-primary">
            🎓 Congratulations! You've completed the security awareness simulation.
          </p>
          <div className="space-x-4">
            <Button 
              onClick={onRestart} 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary"
            >
              Restart Simulation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://cybercrime.gov.in/', '_blank')}
            >
              Report Real Cybercrime
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityTips;