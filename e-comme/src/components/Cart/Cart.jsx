import { useAuthContext } from "../../contexts/AuthContext";

export default function Cart() {
  let { loginGuard } = useAuthContext();
  loginGuard();
  
  return <div>Cart</div>;
}
