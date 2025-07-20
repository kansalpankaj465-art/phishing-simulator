import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Educational Warning Banner */}
      <View style={styles.warningBanner}>
        <View style={styles.warningBadge}>
          <Text style={styles.warningBadgeText}>🎓 EDUCATIONAL SIMULATION</Text>
        </View>
        <Text style={styles.warningText}>This is a FAKE banking page for learning purposes only</Text>
      </View>

      {/* Punjab and Sind Bank Header */}
      <View style={styles.bankHeader}>
        <View style={styles.bankHeaderContent}>
          <View style={styles.bankLogo}>
            <Ionicons name="shield-checkmark" size={32} color="#10B981" />
          </View>
          <View style={styles.bankInfo}>
            <Text style={styles.bankName}>Punjab and Sind Bank</Text>
            <Text style={styles.bankSubtitle}>Personal Net Banking</Text>
          </View>
        </View>
        <View style={styles.secureIndicator}>
          <Ionicons name="lock-closed" size={16} color="#FFF" />
          <Text style={styles.secureText}>secure.psb.bank.in</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>Account Verification Required</Text>
            <Text style={styles.formSubtitle}>
              Please verify your details to secure your Punjab & Sind Bank account
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Account Number</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="person" size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Account Number"
                  value={formData.account}
                  onChangeText={(text) => setFormData({ ...formData, account: text })}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Debit Card Number</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="card" size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter 16-digit Card Number"
                  value={formData.debitCard}
                  onChangeText={(text) => setFormData({ ...formData, debitCard: text })}
                />
              </View>
            </View>

            <View style={styles.inputRow}>
              <View style={[styles.inputGroup, styles.inputHalf]}>
                <Text style={styles.label}>CVV</Text>
                <View style={styles.inputContainer}>
                  <Ionicons name="lock-closed" size={20} color="#9CA3AF" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="CVV"
                    value={formData.cvv}
                    onChangeText={(text) => setFormData({ ...formData, cvv: text })}
                  />
                </View>
              </View>
              <View style={[styles.inputGroup, styles.inputHalf]}>
                <Text style={styles.label}>OTP</Text>
                <View style={styles.inputContainer}>
                  <Ionicons name="lock-closed" size={20} color="#9CA3AF" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChangeText={(text) => setFormData({ ...formData, otp: text })}
                  />
                </View>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Mobile Number</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="call" size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Mobile Number"
                  value={formData.mobile}
                  onChangeText={(text) => setFormData({ ...formData, mobile: text })}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Net Banking Username</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="person" size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Username"
                  value={formData.username}
                  onChangeText={(text) => setFormData({ ...formData, username: text })}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Net Banking Password</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed" size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  secureTextEntry={!showPassword}
                  value={formData.password}
                  onChangeText={(text) => setFormData({ ...formData, password: text })}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={showPassword ? "eye-off" : "eye"} 
                    size={20} 
                    color="#9CA3AF" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Verify Account</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.customerCare}>
            <Text style={styles.customerCareText}>
              Customer Care: <Text style={styles.customerCareNumber}>1800-11-2345</Text>
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Educational Notice */}
      <View style={styles.educationalNotice}>
        <View style={styles.noticeBadge}>
          <Text style={styles.noticeBadgeText}>Educational Notice</Text>
        </View>
        <Text style={styles.noticeText}>
          This is a FAKE Punjab and Sind Bank page. Real banks never ask for credentials via email/SMS links.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4',
  },
  warningBanner: {
    backgroundColor: '#DC2626',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  warningBadge: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  warningBadgeText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '600',
  },
  warningText: {
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center',
  },
  bankHeader: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  bankHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bankLogo: {
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  bankInfo: {
    flex: 1,
  },
  bankName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  bankSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  secureIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    gap: 4,
  },
  secureText: {
    fontSize: 12,
    color: '#FFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  formSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 16,
  },
  inputHalf: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    height: 48,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  eyeButton: {
    padding: 4,
  },
  submitButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  customerCare: {
    marginTop: 24,
    alignItems: 'center',
  },
  customerCareText: {
    fontSize: 14,
    color: '#6B7280',
  },
  customerCareNumber: {
    fontWeight: '600',
    color: '#10B981',
  },
  educationalNotice: {
    backgroundColor: '#FFFBEB',
    margin: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FDE68A',
    alignItems: 'center',
  },
  noticeBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  noticeBadgeText: {
    fontSize: 10,
    color: '#374151',
    fontWeight: '600',
  },
  noticeText: {
    fontSize: 12,
    color: '#92400E',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default PhishingPage;