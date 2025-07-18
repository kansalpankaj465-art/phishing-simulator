import { useState } from 'react';
import { Lock, Shield, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PhishingPageProps {
  onSubmit: (data: { account: string; otp: string; password: string }) => void;
}

const PhishingPage = ({ onSubmit }: PhishingPageProps) => {
  const [formData, setFormData] = useState({ account: '', otp: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-bank-blue">
      {/* Educational Warning Banner */}
      <div className="bg-danger text-danger-foreground text-center py-2 px-4">
        <Badge variant="secondary" className="mr-2">🎓 EDUCATIONAL SIMULATION</Badge>
        This is a FAKE banking page for learning purposes only
      </div>

      {/* Fake Bank Header */}
      <div className="bg-bank-blue text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-bank-gold rounded p-2">
                <Shield className="h-6 w-6 text-bank-blue" />
              </div>
              <div>
                <h1 className="text-xl font-bold">State Bank of India</h1>
                <p className="text-xs opacity-90">Secure Banking Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Lock className="h-4 w-4" />
              <span>secure-sbi-alert.in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 pt-8">
        <Card className="p-6 shadow-2xl">
          <div className="text-center mb-6">
            <div className="bg-destructive/10 rounded-full p-3 w-fit mx-auto mb-4">
              <Shield className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="text-xl font-bold text-destructive mb-2">Security Alert</h2>
            <p className="text-sm text-muted-foreground">
              Suspicious activity detected on your account. Please verify your details immediately.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="account">Account Number</Label>
              <Input
                id="account"
                placeholder="Enter your account number"
                value={formData.account}
                onChange={(e) => setFormData({ ...formData, account: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="mt-1 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-1 h-8 w-8 px-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="otp">OTP</Label>
              <Input
                id="otp"
                placeholder="Enter 6-digit OTP"
                value={formData.otp}
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                className="mt-1"
                maxLength={6}
              />
              <p className="text-xs text-muted-foreground mt-1">
                OTP sent to your registered mobile number
              </p>
            </div>

            <Button type="submit" className="w-full bg-bank-blue hover:bg-bank-blue/90">
              Verify & Secure Account
            </Button>
          </form>

          <div className="mt-6 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-center text-gray-600">
              🔒 Your information is protected by 256-bit encryption
            </p>
          </div>
        </Card>

        {/* Educational Notice */}
        <Card className="mt-4 p-4 bg-warning/10 border-warning/30">
          <div className="text-center">
            <Badge variant="outline" className="mb-2">Educational Notice</Badge>
            <p className="text-xs text-gray-600">
              In a real scenario, entering your details here would give hackers complete access to your account.
              This simulation is completely safe - no data is transmitted.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PhishingPage;