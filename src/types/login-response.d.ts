export interface LoginResponse {
  statusCode: number;
  data: {
    user: {
      _id: string;
      avatar: {
        url: string;
        localPath: string;
        _id: string;
      };
      username: string;
      email: string;
      role: "USER" | "ADMIN" | string; // you can extend with more roles
      loginType: "EMAIL_PASSWORD" | "GOOGLE" | "FACEBOOK" | string;
      isEmailVerified: boolean;
      createdAt: string; // ISO date string
      updatedAt: string; // ISO date string
      __v: number;
    };
    accessToken: string;
    refreshToken: string;
  };
  message: string;
  success: boolean;
}
