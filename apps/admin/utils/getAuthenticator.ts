import { TokenService } from "api-client";
import { configs } from "common";
import Cookie from "js-cookie";
import { getAxios } from "./getAxios";

export const getAuthenticator = () => {
  return {
    signIn: async (username: string, password: string) => {
      getAxios();
      const token = await TokenService.createTokenObtainPair({
        body: { username, password },
      });
      return (token as any).access;
    },
    signOut: async () => {
      Cookie.remove(configs.auth.AccessTokenKey);
    },
  };
};
