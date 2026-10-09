export interface User {
  id: number;
  first_name: string | null;
  last_name: string | null;
  email: string;
  role?: string;
  terms?: boolean;
  email_verified_status?: boolean;
}

export interface LoginResponse {
  status: boolean;
  code?: number;
  message: string;
  session_established?: boolean;
  data?:
    | User
    | {
        email?: string;
        [key: string]: any;
      };
  errors?: Record<string, string[]>;
}

export interface RegisterResponse {
  status: number | boolean;
  message: string;
  data?: {
    email?: string;
  };
  errors?: Record<string, string[]>;
}

export interface VerifyOtpResponse {
  status: boolean | number;
  message: string;
  session_established?: boolean;
  data?: User;
  errors?: Record<string, string[]>;
}

export interface ResendOtpResponse {
  status: number | boolean;
  message: string;
  data?: {
    email?: string;
  };
  errors?: Record<string, string[]>;
}

export interface ForgotPasswordResponse {
  status: number | boolean;
  message: string;
  data?: {
    email?: string;
  };
  errors?: Record<string, string[]>;
}

export interface ForgotVerifyOtpResponse {
  status: number | boolean;
  message: string;
  reset_authorized?: boolean;
  data?: Record<string, never>;
  errors?: Record<string, string[]>;
}

export interface ResetPasswordResponse {
  status: number | boolean;
  message: string;
  data?: any;
  errors?: Record<string, string[]>;
}

export interface LogoutResponse {
  status: number | boolean;
  message: string;
  data?: any;
}
