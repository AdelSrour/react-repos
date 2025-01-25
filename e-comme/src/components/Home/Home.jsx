import React, { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Home() {
  let { loginGuard } = useAuthContext();
  loginGuard();

  return <div>Home</div>;
}
