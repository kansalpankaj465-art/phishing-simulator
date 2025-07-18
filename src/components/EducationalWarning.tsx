import { AlertTriangle, XCircle, Eye, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EducationalWarningProps {
  onNext: () => void;
  userData: { account: string; otp: string; password: string };
}

const EducationalWarning = ({ onNext, userData }: EducationalWarningProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-danger/10 to-destructive/10 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-danger rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-danger mb-4">⚠️ YOU'VE BEEN PHISHED!</h1>
          <Badge variant="destructive" className="text-base px-4 py-2">This was a simulated phishing attack</Badge>
        </div>

        <Card className="mb-6 border-danger/50">
          <CardHeader className="bg-danger/10">
            <CardTitle className="flex items-center text-danger">
              <XCircle className="h-5 w-5 mr-2" />
              What Just Happened?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg mb-4">
              You just submitted your sensitive banking information to a <strong>fake website</strong>. 
              In a real phishing attack, criminals would now have:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-destructive/30">
                <CardContent className="pt-4">
                  <CreditCard className="h-8 w-8 text-destructive mb-2" />
                  <h3 className="font-semibold mb-2">Your Account Number</h3>
                  <p className="text-sm text-muted-foreground">
                    They can use this to target you with more specific attacks
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardContent className="pt-4">
                  <Eye className="h-8 w-8 text-destructive mb-2" />
                  <h3 className="font-semibold mb-2">Your Password</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete access to your online banking account
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardContent className="pt-4">
                  <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
                  <h3 className="font-semibold mb-2">Your OTP</h3>
                  <p className="text-sm text-muted-foreground">
                    Ability to authorize transactions immediately
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>The Data You Submitted (Simulated)</CardTitle>
            <CardDescription>This data was NOT actually transmitted anywhere</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <div className="space-y-2">
                <div>Account: {userData.account || '(not entered)'}</div>
                <div>Password: {'*'.repeat(userData.password.length) || '(not entered)'}</div>
                <div>OTP: {userData.otp || '(not entered)'}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-warning/10 border-warning/30 mb-6">
          <CardHeader>
            <CardTitle className="text-warning">Real-World Consequences</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>💰 Immediate unauthorized transactions</li>
              <li>🏦 Complete compromise of your bank account</li>
              <li>📱 Additional attacks using your personal information</li>
              <li>🔐 Potential identity theft</li>
              <li>💸 Financial losses that may be difficult to recover</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            onClick={onNext} 
            size="lg" 
            variant="destructive"
            className="bg-gradient-to-r from-danger to-destructive"
          >
            See What Happens Next →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EducationalWarning;