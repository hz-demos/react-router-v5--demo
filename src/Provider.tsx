import { createContext, useState } from "react";

type AuthContext = {
  user: string | null;
  signin: (cb: Function) => void;
  signout: (cb: Function) => void;
};

export const authContext = createContext<AuthContext | null>(null);

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: Function) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: Function) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function useProvideAuth() {
  const [user, setUser] = useState<string | null>(null);

  const signin = (cb: Function) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb: Function) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return { user, signin, signout };
}

export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
