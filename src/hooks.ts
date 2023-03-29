import { useContext } from "react";
import { authContext } from "./Provider";

export function useAuth() {
  return useContext(authContext)!;
}
