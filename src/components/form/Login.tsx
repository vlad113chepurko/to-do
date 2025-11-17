import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { useNavigate } from "react-router";
import "./Form.css";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="form__signup">
      <h1>Login</h1>
      <section className="form__section">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Email" />
      </section>
      <section className="form__section">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Password" />
      </section>
      <Button variant="secondary" type="submit">
        Login
      </Button>
      <section className="form__bottom">
        <Button 
        className="text-amber-50"
        variant="link" onClick={() => navigate("/form/signup")}>
          Create an account
        </Button>
      </section>
    </div>
  );
}
