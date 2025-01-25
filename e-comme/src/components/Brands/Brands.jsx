import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Brands() {
  let { loginGuard } = useAuthContext();
  loginGuard();

  return <div>Brands</div>;
}
