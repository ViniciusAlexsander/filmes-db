import { createContext, useContext, ReactNode, useState } from "react";

type user = {
  access_token: string | undefined;
  account_id: string | undefined;
  request_token: string | undefined;
};

type authContextType = {
  user: user | undefined;
  login: (user: user) => void;
  logout: (user: user) => void;
};

const authContextDefaultValues: authContextType = {
  user: undefined,
  login: (user: user) => {},
  logout: (user: user) => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<user>(undefined);

  const login = (user: user) => {
    console.log("user", user);
    setUser(user);
  };

  const logout = (user: user) => {
    setUser(user);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
