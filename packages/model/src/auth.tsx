import React from "react";
import Cookie from "js-cookie";
import { configs } from "common";

interface Props {
  authenticator: {
    signIn(username: string, password: string): Promise<string>;
    signOut(): Promise<void>;
  };
  children: any;
}

interface AuthenticationInterface {
  signIn(username: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  isSignedIn: boolean;
}

export const AuthenticationContext =
  React.createContext<AuthenticationInterface>({} as any);

/**
 * Authentication provider for authentication
 * @param props
 * @constructor
 */
export function AuthenticationProvider(props: Props) {
  const { children, authenticator } = props;
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  React.useEffect(() => {
    const token = Cookie.get(configs.auth.AccessTokenKey);
    if (token) {
      setIsSignedIn(true);
    }
  }, []);

  const signIn = React.useCallback(
    async (username: string, password: string) => {
      const token = await authenticator.signIn(username, password);
      setIsSignedIn(true);
      Cookie.set(configs.auth.AccessTokenKey, token);
    },
    []
  );

  const signOut = React.useCallback(async () => {
    await authenticator.signOut();
    setIsSignedIn(false);
  }, []);

  const value: AuthenticationInterface = {
    isSignedIn,
    signIn,
    signOut,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
