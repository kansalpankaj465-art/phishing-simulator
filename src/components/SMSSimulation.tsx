import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SMSSimulationProps {
  onNext: () => void;
}

const { width } = Dimensions.get('window');

const SMSSimulation = ({ onNext }: SMSSimulationProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.phoneFrame}>
        <View style={styles.phone}>
          {/* Status Bar */}
          <View style={styles.statusBar}>
            <Text style={styles.time}>9:41</Text>
            <View style={styles.statusIcons}>
              <Ionicons name="wifi" size={12} color="#000" />
              <Text style={styles.signal}>●●●</Text>
              <Ionicons name="battery-full" size={12} color="#000" />
              <Text style={styles.battery}>100%</Text>
            </View>
          </View>

          {/* Messages Header */}
          <View style={styles.messagesHeader}>
            <Text style={styles.messagesTitle}>Messages</Text>
          </View>

          {/* Message Thread */}
          <View style={styles.messageThread}>
            <View style={styles.messageContainer}>
              <View style={styles.avatarContainer}>
                <Ionicons name="phone-portrait" size={16} color="#666" />
              </View>
              <View style={styles.messageContent}>
                <View style={styles.messageHeader}>
                  <Text style={styles.senderName}>PSB-Alert</Text>
                  <Text style={styles.phoneNumber}>+91-9876543210</Text>
                </View>
                <View style={styles.messageBubble}>
                  <Text style={styles.messageText}>
                    [PSB-Alert]: Dear Customer, we have temporarily locked your account due to unusual login attempts.
                    {'\n\n'}
                    Verify immediately at: http://psbverify-alerts.online
                    {'\n\n'}
                    - Punjab & Sind Bank Security Team
                  </Text>
                </View>
                <View style={styles.messageTime}>
                  <Ionicons name="time" size={12} color="#999" />
                  <Text style={styles.timeText}>2 minutes ago</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Educational Overlay */}
          <View style={styles.educationalOverlay}>
            <View style={styles.simulationBadge}>
              <Text style={styles.simulationBadgeText}>⚠️ SIMULATION</Text>
            </View>
            <Text style={styles.overlayDescription}>
              This is a fake SMS designed to demonstrate phishing tactics.
            </Text>

            {!showDetails && (
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => setShowDetails(true)}
              >
                <Text style={styles.detailsButtonText}>What makes this suspicious?</Text>
              </TouchableOpacity>
            )}

            {showDetails && (
              <View style={styles.detailsCard}>
                <Text style={styles.detailsTitle}>🚩 Red flags:</Text>
                <Text style={styles.detailsItem}>• Suspicious URL (not official PSB domain)</Text>
                <Text style={styles.detailsItem}>• Creates urgency and panic</Text>
                <Text style={styles.detailsItem}>• Asks to "verify details" via link</Text>
                <Text style={styles.detailsItem}>• Generic greeting "Dear Customer"</Text>
              </View>
            )}

            <TouchableOpacity style={styles.nextButton} onPress={onNext}>
              <Text style={styles.nextButtonText}>Click the Suspicious Link (Safe Simulation)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  phoneFrame: {
    backgroundColor: '#000',
    borderRadius: 32,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  phone: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    width: width * 0.8,
    height: 600,
    overflow: 'hidden',
    position: 'relative',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F8F9FA',
  },
  time: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signal: {
    fontSize: 10,
    color: '#000',
  },
  battery: {
    fontSize: 10,
    color: '#000',
  },
  messagesHeader: {
    backgroundColor: '#007AFF',
    padding: 16,
  },
  messagesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  messageThread: {
    padding: 16,
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  avatarContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#E5E7EB',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  senderName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  phoneNumber: {
    fontSize: 12,
    color: '#666',
  },
  messageBubble: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    maxWidth: '90%',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
  messageTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
  educationalOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  simulationBadge: {
    backgroundColor: '#DC2626',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  simulationBadgeText: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: '600',
  },
  overlayDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  detailsButton: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  detailsButtonText: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
  },
  detailsCard: {
    backgroundColor: '#FEF3C7',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  detailsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#92400E',
    marginBottom: 8,
  },
  detailsItem: {
    fontSize: 11,
    color: '#78350F',
    marginBottom: 4,
  },
  nextButton: {
    backgroundColor: '#DC2626',
    padding: 12,
    borderRadius: 8,
  },
  nextButtonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default SMSSimulation;