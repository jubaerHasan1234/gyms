export interface OtpVerificationCardProps {
  email: string;
  onSuccessRedirect?: string;
  isForgotPasswordFlow?: boolean;
  onForgotVerified?: () => void;
  onBackToLogin?: () => void;
  title?: string;
  subtitle?: string;
}
