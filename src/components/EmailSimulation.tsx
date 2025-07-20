import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface EmailSimulationProps {
  onNext: () => void;
}

const EmailSimulation = ({ onNext }: EmailSimulationProps) => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Email Client Interface */}
        <View style={styles.emailClient}>
          {/* Email Header */}
          <View style={styles.emailHeader}>
            <View style={styles.headerLeft}>
              <Ionicons name="mail" size={24} color="#1D4ED8" />
              <Text style={styles.headerTitle}>Gmail</Text>
            </View>
            <Text style={styles.headerRight}>Inbox (1)</Text>
          </View>

          {/* Email Content */}
          <View style={styles.emailContent}>
            <View style={styles.emailCard}>
              {/* Email Header Info */}
              <View style={styles.emailInfo}>
                <View style={styles.emailSubject}>
                  <Text style={styles.subjectText}>🚨 Urgent: Account Verification Required</Text>
                  <View style={styles.suspiciousBadge}>
                    <Text style={styles.suspiciousBadgeText}>SUSPICIOUS</Text>
                  </View>
                </View>
                <Text style={styles.senderEmail}>noreply@punjabandsindbank.in</Text>
                <View style={styles.emailMeta}>
                  <View style={styles.metaItem}>
                    <Ionicons name="calendar" size={12} color="#666" />
                    <Text style={styles.metaText}>Today</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="time" size={12} color="#666" />
                    <Text style={styles.metaText}>3:42 PM</Text>
                  </View>
                </View>
              </View>

              {/* Email Body */}
              <View style={styles.emailBody}>
                <Text style={styles.emailTitle}>🚨 Urgent: Account Verification Required</Text>
                <Text style={styles.emailText}>Dear Valued Customer,</Text>
                <Text style={styles.emailText}>
                  We have detected unauthorized login attempts on your Punjab & Sind Bank account.
                  To prevent further misuse, please verify your identity within 12 hours by clicking the button below:
                </Text>
                <Text style={styles.warningText}>
                  Failure to verify may result in account suspension.
                </Text>
                <TouchableOpacity
                  style={styles.verifyButton}
                  onPress={() => alert('This would redirect to a fake PSB page!')}
                >
                  <Text style={styles.verifyButtonText}>👉 Verify Now</Text>
                </TouchableOpacity>
                <View style={styles.signature}>
                  <Text style={styles.signatureText}>Sincerely,</Text>
                  <Text style={styles.signatureText}>Punjab & Sind Bank Security Team</Text>
                  <Text style={styles.signatureText}>www.punjabandsindbank.co.in</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Educational Analysis */}
        <View style={styles.analysisCard}>
          <View style={styles.analysisHeader}>
            <View style={styles.analysisTitle}>
              <Ionicons name="warning" size={20} color="#F59E0B" />
              <Text style={styles.analysisTitleText}>🎓 Educational Analysis</Text>
            </View>
            <View style={styles.simulationBadge}>
              <Text style={styles.simulationBadgeText}>SIMULATION</Text>
            </View>
          </View>

          {!showAnalysis ? (
            <TouchableOpacity
              style={styles.analyzeButton}
              onPress={() => setShowAnalysis(true)}
            >
              <Text style={styles.analyzeButtonText}>Analyze This Phishing Email</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.analysisContent}>
              <View style={styles.analysisSection}>
                <Text style={styles.sectionTitle}>🚩 Red Flags Found:</Text>
                <Text style={styles.flagItem}>• Fake domain: punjabandsindbank.in (suspicious)</Text>
                <Text style={styles.flagItem}>• Urgency tactics: "URGENT", "immediate verification"</Text>
                <Text style={styles.flagItem}>• Generic greeting: "Dear Valued Customer"</Text>
                <Text style={styles.flagItem}>• Suspicious button: Asking to click to "verify"</Text>
              </View>

              <View style={styles.analysisSection}>
                <Text style={styles.sectionTitle}>✅ How to Verify:</Text>
                <Text style={styles.verifyItem}>• Check official PSB domain (psbindia.com)</Text>
                <Text style={styles.verifyItem}>• Call PSB customer service: 1800-11-2345</Text>
                <Text style={styles.verifyItem}>• Login through official app/website</Text>
                <Text style={styles.verifyItem}>• Never click links in suspicious emails</Text>
              </View>

              <TouchableOpacity style={styles.continueButton} onPress={onNext}>
                <Text style={styles.continueButtonText}>Continue to Bank Page Simulation →</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  scrollView: {
    flex: 1,
  },
  emailClient: {
    backgroundColor: '#FFF',
    margin: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
  },
  emailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  headerRight: {
    fontSize: 14,
    color: '#6B7280',
  },
  emailContent: {
    padding: 24,
  },
  emailCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
  },
  emailInfo: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  emailSubject: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  subjectText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
  },
  suspiciousBadge: {
    backgroundColor: '#DC2626',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  suspiciousBadgeText: {
    fontSize: 10,
    color: '#FFF',
    fontWeight: '600',
  },
  senderEmail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  emailMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  emailBody: {
    padding: 24,
  },
  emailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 16,
  },
  emailText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 12,
  },
  warningText: {
    fontSize: 14,
    color: '#DC2626',
    fontWeight: '600',
    marginBottom: 16,
  },
  verifyButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 24,
  },
  verifyButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
  signature: {
    gap: 4,
  },
  signatureText: {
    fontSize: 12,
    color: '#6B7280',
  },
  analysisCard: {
    backgroundColor: '#FFFBEB',
    margin: 16,
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  analysisHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  analysisTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  analysisTitleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#92400E',
  },
  simulationBadge: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  simulationBadgeText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '600',
  },
  analyzeButton: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  analyzeButtonText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '600',
    textAlign: 'center',
  },
  analysisContent: {
    gap: 16,
  },
  analysisSection: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#92400E',
  },
  flagItem: {
    fontSize: 13,
    color: '#78350F',
    lineHeight: 18,
  },
  verifyItem: {
    fontSize: 13,
    color: '#78350F',
    lineHeight: 18,
  },
  continueButton: {
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default EmailSimulation;