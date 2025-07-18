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
                      <span className="font-semibold">🚨 Urgent: Account Verification Required</span>
                      <Badge variant="destructive" className="text-xs">SUSPICIOUS</Badge>
                    </div>
                    <p className="text-sm text-gray-600">noreply@punjabandsindbank.in</p>
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
                  <h3 className="text-lg font-bold text-red-600">🚨 Urgent: Account Verification Required</h3>
                  
                  <p className="text-gray-700">Dear Valued Customer,</p>
                  
                  <p className="text-gray-700">
                    We have detected unauthorized login attempts on your Punjab & Sind Bank account.
                    To prevent further misuse, please verify your identity within 12 hours by clicking the button below:
                  </p>

                  <p className="text-gray-700 font-semibold text-red-600">
                    Failure to verify may result in account suspension.
                  </p>

                  <div className="text-center py-4">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
                      onClick={() => alert('This would redirect to a fake PSB page!')}
                    >
                      👉 Verify Now
                    </Button>
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Sincerely,</p>
                    <p>Punjab & Sind Bank Security Team</p>
                    <p>www.punjabandsindbank.co.in</p>
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
                        <span><strong>Fake domain:</strong> punjabandsindbank.in (suspicious)</span>
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
                        <span>Check official PSB domain (psbindia.com)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Call PSB customer service: 1800-11-2345</span>
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