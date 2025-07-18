import { useState } from 'react';
import { Lock, Shield, Eye, EyeOff, User, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PhishingPageProps {
  onSubmit: (data: { 
    account: string; 
    debitCard: string;
    cvv: string;
    otp: string; 
    mobile: string;
    username: string;
    password: string;
  }) => void;
}

const PhishingPage = ({ onSubmit }: PhishingPageProps) => {
  const [formData, setFormData] = useState({ 
    account: '', 
    debitCard: '', 
    cvv: '', 
    otp: '', 
    mobile: '', 
    username: '', 
    password: '' 
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Educational Warning Banner */}
      <div className="bg-danger text-danger-foreground text-center py-2 px-4">
        <Badge variant="secondary" className="mr-2">🎓 EDUCATIONAL SIMULATION</Badge>
        This is a FAKE banking page for learning purposes only
      </div>

      {/* Punjab and Sind Bank Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-lg p-2">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Punjab and Sind Bank</h1>
                <p className="text-sm opacity-90">Personal Net Banking</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm bg-white/10 px-3 py-1 rounded-full">
              <Lock className="h-4 w-4" />
              <span>secure.psb.bank.in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] p-4">
        <div className="flex max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Side - Form */}
          <div className="flex-1 p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Account Verification Required</h2>
                <p className="text-gray-600">
                  Please verify your details to secure your Punjab & Sind Bank account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="account" className="text-gray-700 font-medium">
                    Account Number
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="account"
                      placeholder="Enter Account Number"
                      value={formData.account}
                      onChange={(e) => setFormData({ ...formData, account: e.target.value })}
                      className="pl-10 h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="debitCard" className="text-gray-700 font-medium">
                    Debit Card Number
                  </Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="debitCard"
                      placeholder="Enter 16-digit Card Number"
                      value={formData.debitCard}
                      onChange={(e) => setFormData({ ...formData, debitCard: e.target.value })}
                      className="pl-10 h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cvv" className="text-gray-700 font-medium">
                      CVV
                    </Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        className="pl-10 h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="otp" className="text-gray-700 font-medium">
                      OTP
                    </Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="otp"
                        placeholder="Enter OTP"
                        value={formData.otp}
                        onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                        className="pl-10 h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-gray-700 font-medium">
                    Mobile Number
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="mobile"
                      placeholder="Enter Mobile Number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="pl-10 h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="username" className="text-gray-700 font-medium">
                    Net Banking Username
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="username"
                      placeholder="Enter Username"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="pl-10 h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    Net Banking Password
                  </Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 px-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Verify Account
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Customer Care: <span className="font-semibold text-emerald-600">1800-11-2345</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-emerald-100 to-teal-100 items-center justify-center p-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-8 shadow-lg mb-6 mx-auto w-48 h-48 flex items-center justify-center">
                <div className="text-emerald-600">
                  <User className="h-20 w-20 mx-auto mb-4" />
                  <CheckCircle className="h-8 w-8 mx-auto" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Setup</h3>
              <p className="text-gray-600 max-w-xs">
                Create your secure login credentials to access all banking services safely
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Notice */}
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
        <Card className="p-3 bg-warning/10 border-warning/30 backdrop-blur-sm">
          <div className="text-center">
            <Badge variant="outline" className="mb-1 text-xs">Educational Notice</Badge>
            <p className="text-xs text-gray-600">
              This is a FAKE Punjab and Sind Bank page. Real banks never ask for credentials via email/SMS links.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PhishingPage;