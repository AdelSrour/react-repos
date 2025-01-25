import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Category() {
  let { loginGuard } = useAuthContext();
  loginGuard();

  return <div>Category</div>;
}
