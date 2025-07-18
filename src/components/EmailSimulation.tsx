import { useState } from 'react';
import { Mail, Calendar, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EmailSimulationProps {
  onNext: () => void;
}

const EmailSimulation = ({ onNext }: EmailSimulationProps) => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Email Client Interface */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Email Header */}
          <div className="bg-gray-50 border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold">Gmail</h2>
              </div>
              <div className="text-sm text-gray-500">Inbox (1)</div>
            </div>
          </div>

          {/* Email Content */}
          <div className="p-6">
            <div className="border rounded-lg overflow-hidden">
              {/* Email Header Info */}
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">HDFC Bank Security</span>
                      <Badge variant="destructive" className="text-xs">SUSPICIOUS</Badge>
                    </div>
                    <p className="text-sm text-gray-600">security@hdfc-alerts.co.in</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Today</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>3:42 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Body */}
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-red-600">🚨 URGENT: Suspicious Activity Detected</h3>
                  
                  <p className="text-gray-700">Dear Valued Customer,</p>
                  
                  <p className="text-gray-700">
                    We have detected multiple failed login attempts on your HDFC Bank account from an unrecognized device in 
                    <strong> Kolkata, West Bengal</strong> at <strong>3:15 PM today</strong>.
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Suspicious Activities:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 5 failed login attempts</li>
                      <li>• Access from new IP address: 203.194.152.78</li>
                      <li>• Device: Unknown Windows PC</li>
                    </ul>
                  </div>

                  <p className="text-gray-700">
                    <strong>To protect your account, immediate verification is required.</strong> 
                    Please click the button below to verify your identity and secure your account:
                  </p>

                  <div className="text-center py-4">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
                      onClick={() => alert('This would redirect to a fake HDFC page!')}
                    >
                      VERIFY ACCOUNT NOW
                    </Button>
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>This is an automated message from HDFC Bank Security Team.</p>
                    <p>If you did not request this, please ignore this email.</p>
                    <p>© 2024 HDFC Bank Ltd. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Analysis */}
        <div className="mt-6">
          <Card className="p-6 bg-warning/10 border-warning/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <h3 className="font-semibold">🎓 Educational Analysis</h3>
              </div>
              <Badge variant="secondary">SIMULATION</Badge>
            </div>

            {!showAnalysis ? (
              <Button 
                onClick={() => setShowAnalysis(true)}
                variant="outline"
                className="w-full"
              >
                Analyze This Phishing Email
              </Button>
            ) : (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-red-600">🚩 Red Flags Found:</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span><strong>Fake domain:</strong> hdfc-alerts.co.in (not hdfc.com)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span><strong>Urgency tactics:</strong> "URGENT", "immediate verification"</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span><strong>Generic greeting:</strong> "Dear Valued Customer"</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span><strong>Suspicious button:</strong> Asking to click to "verify"</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-600">✅ How to Verify:</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Check official HDFC domain (hdfc.com)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Call HDFC customer service directly</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Login through official app/website</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Never click links in suspicious emails</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Button 
                    onClick={onNext} 
                    className="w-full bg-gradient-to-r from-primary to-secondary"
                  >
                    Continue to Bank Page Simulation →
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailSimulation;