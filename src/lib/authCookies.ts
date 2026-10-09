export const SESSION_COOKIE = "lg_tk";
export const RESET_COOKIE = "kratos_reset_tk";
export const SESSION_USER_COOKIE = "kratos_session_user";

const COMMON_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
};

export const SESSION_COOKIE_OPTIONS = {
  ...COMMON_COOKIE_OPTIONS,
  maxAge: 60 * 60 * 24 * 7,
};

export const RESET_COOKIE_OPTIONS = {
  ...COMMON_COOKIE_OPTIONS,
  maxAge: 15 * 60,
};
