import { useAuthContext } from "../../contexts/AuthContext";

export default function Product() {
  let { loginGuard } = useAuthContext();
  loginGuard();

  return <div>Product</div>;
}
