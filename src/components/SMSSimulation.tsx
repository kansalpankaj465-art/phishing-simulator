import { useState } from 'react';
import { Smartphone, Clock, Wifi, Battery } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SMSSimulationProps {
  onNext: () => void;
}

const SMSSimulation = ({ onNext }: SMSSimulationProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="max-w-md mx-auto">
        {/* Phone Frame */}
        <div className="bg-black rounded-[2rem] p-2 shadow-2xl">
          <div className="bg-white rounded-[1.5rem] h-[600px] relative overflow-hidden">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 text-xs bg-gray-50">
              <div className="flex items-center space-x-1">
                <span className="font-medium">9:41</span>
              </div>
              <div className="flex items-center space-x-1">
                <Wifi className="h-3 w-3" />
                <span className="text-xs">●●●</span>
                <Battery className="h-3 w-3" />
                <span>100%</span>
              </div>
            </div>

            {/* Messages App Header */}
            <div className="bg-blue-500 text-white p-4">
              <h2 className="font-semibold">Messages</h2>
            </div>

            {/* Message Thread */}
            <div className="p-4 space-y-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <Smartphone className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">SBI Secure</span>
                    <span className="text-xs text-gray-500">+91-9876543210</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">
                      🔐 Dear Customer, we noticed a suspicious login attempt on your SBI account from Mumbai at 2:30 PM. 
                      <br/><br/>
                      If this wasn't you, please verify your details immediately: 
                      <br/><br/>
                      <span className="text-blue-600 underline">https://secure-sbi-alert.in/verify</span>
                      <br/><br/>
                      - SBI Security Team
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-500">2 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t p-4">
              <Badge variant="destructive" className="mb-2">⚠️ SIMULATION</Badge>
              <p className="text-xs text-gray-600 mb-3">
                This is a fake SMS designed to demonstrate phishing tactics.
              </p>
              
              {!showDetails && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowDetails(true)}
                  className="w-full mb-2"
                >
                  What makes this suspicious?
                </Button>
              )}

              {showDetails && (
                <Card className="p-3 mb-3 text-xs space-y-2">
                  <p>🚩 <strong>Red flags:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• Suspicious URL (not official SBI domain)</li>
                    <li>• Creates urgency and panic</li>
                    <li>• Asks to "verify details" via link</li>
                    <li>• Generic greeting "Dear Customer"</li>
                  </ul>
                </Card>
              )}

              <Button 
                onClick={onNext} 
                className="w-full"
                variant="destructive"
              >
                Click the Suspicious Link (Safe Simulation)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSSimulation;