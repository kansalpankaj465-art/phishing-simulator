import { useState, useEffect } from 'react';
import { Smartphone, Clock, Wifi, Battery, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DebitSimulationProps {
  onNext: () => void;
}

const DebitSimulation = ({ onNext }: DebitSimulationProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showPanic, setShowPanic] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 1000);
    const timer2 = setTimeout(() => setShowPanic(true), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="max-w-md mx-auto">
        {/* Phone Frame */}
        <div className="bg-black rounded-[2rem] p-2 shadow-2xl">
          <div className="bg-white rounded-[1.5rem] h-[600px] relative overflow-hidden">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 text-xs bg-gray-50">
              <div className="flex items-center space-x-1">
                <span className="font-medium">9:47</span>
              </div>
              <div className="flex items-center space-x-1">
                <Wifi className="h-3 w-3" />
                <span className="text-xs">●●●</span>
                <Battery className="h-3 w-3" />
                <span>95%</span>
              </div>
            </div>

            {/* Notification */}
            {showMessage && (
              <div className="bg-danger text-white p-4 border-l-4 border-red-600 animate-fade-in">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">SBI Alert</span>
                      <span className="text-xs opacity-90">now</span>
                    </div>
                    <p className="text-sm leading-relaxed">
                      <strong>₹24,000.00</strong> has been debited from your SBI account ending with <strong>0921</strong> on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}.
                    </p>
                    <p className="text-xs mt-2 opacity-90">
                      If this transaction was not made by you, please call 1800-11-2211 immediately.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {showPanic && (
              <div className="p-4 space-y-4 animate-fade-in">
                <Card className="bg-danger/10 border-danger/30 p-4">
                  <div className="text-center space-y-2">
                    <AlertTriangle className="h-8 w-8 text-danger mx-auto" />
                    <h3 className="font-bold text-danger">😱 The Panic Sets In</h3>
                    <p className="text-sm text-gray-700">
                      This is the moment victims realize they've been scammed. 
                      ₹24,000 is gone, and it's often very difficult to recover.
                    </p>
                  </div>
                </Card>

                <Card className="p-4 space-y-3">
                  <h4 className="font-semibold text-sm">Typical Victim Response:</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Immediately calls the bank</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Reports to cyber crime</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span>Blocks all cards and accounts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                      <span>Money recovery: Often unsuccessful</span>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Educational Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t p-4">
              <Badge variant="secondary" className="mb-2">🎓 SIMULATION</Badge>
              <p className="text-xs text-gray-600 mb-3">
                This represents the devastating moment when victims realize they've lost money to a scam.
              </p>
              
              <Button 
                onClick={onNext} 
                className="w-full"
                disabled={!showPanic}
              >
                {showPanic ? 'Learn How to Protect Yourself' : 'Loading...'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitSimulation;