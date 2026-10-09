import {
  LoginResponse,
  RegisterResponse,
  VerifyOtpResponse,
  ResendOtpResponse,
  ForgotPasswordResponse,
  ForgotVerifyOtpResponse,
  ResetPasswordResponse,
  LogoutResponse,
} from "./types/auth";

const BASE_URL = "/api/proxy";

/**
 * Helper to make FormData POST requests via proxy
 */
async function postFormData<T>(
  endpoint: string,
  formData: FormData
): Promise<T> {
  const headers: HeadersInit = {
    Accept: "application/json",
  };

  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers,
    body: formData,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok && !data.message) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return data as T;
}

export const authApi = {
  /**
   * Log in user
   * Accepted form-data: email, password, remember_me
   */
  async login(email: string, password: string, rememberMe: boolean = true): Promise<LoginResponse> {
    const fd = new FormData();
    fd.append("email", email.trim());
    fd.append("password", password);
    fd.append("remember_me", rememberMe ? "1" : "0");

    return postFormData<LoginResponse>("login", fd);
  },

  /**
   * Register user
   * Accepted form-data: first_name, last_name, email, password, password_confirmation, terms
   */
  async register(params: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
  }): Promise<RegisterResponse> {
    const fd = new FormData();
    fd.append("first_name", params.first_name.trim());
    fd.append("last_name", params.last_name.trim());
    fd.append("email", params.email.trim());
    fd.append("password", params.password);
    fd.append("password_confirmation", params.password_confirmation);
    fd.append("terms", params.terms ? "true" : "false");

    return postFormData<RegisterResponse>("register", fd);
  },

  /**
   * Verify email OTP
   * Accepted form-data: email, otp
   */
  async verifyOtp(email: string, otp: string): Promise<VerifyOtpResponse> {
    const fd = new FormData();
    fd.append("email", email.trim());
    fd.append("otp", otp.trim());

    return postFormData<VerifyOtpResponse>("verify_otp", fd);
  },

  /**
   * Resend OTP for email verification
   * Accepted form-data: email
   */
  async resendOtp(email: string): Promise<ResendOtpResponse> {
    const fd = new FormData();
    fd.append("email", email.trim());

    return postFormData<ResendOtpResponse>("resend_otp", fd);
  },

  /**
   * Request password reset OTP
   * Accepted form-data: email
   */
  async forgotPassword(email: string): Promise<ForgotPasswordResponse> {
    const fd = new FormData();
    fd.append("email", email.trim());

    return postFormData<ForgotPasswordResponse>("forgot-password", fd);
  },

  /**
   * Verify OTP for forgot password
   * Accepted form-data: email, otp
   */
  async forgotVerifyOtp(email: string, otp: string): Promise<ForgotVerifyOtpResponse> {
    const fd = new FormData();
    fd.append("email", email.trim());
    fd.append("otp", otp.trim());

    return postFormData<ForgotVerifyOtpResponse>("forgot-verify-otp", fd);
  },

  /**
   * Reset password using the server-side, HttpOnly reset-token cookie.
   * Accepted form-data: password, password_confirmation
   */
  async resetPassword(params: {
    password: string;
    password_confirmation: string;
  }): Promise<ResetPasswordResponse> {
    const fd = new FormData();
    fd.append("password", params.password);
    fd.append("password_confirmation", params.password_confirmation);

    return postFormData<ResetPasswordResponse>("reset-password", fd);
  },

  /**
   * Logout user using the server-side, HttpOnly session cookie.
   */
  async logout(): Promise<LogoutResponse> {
    const fd = new FormData();
    return postFormData<LogoutResponse>("logout", fd);
  },
};
