import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Spinner } from "@/components/ui/spinner";
import { useNavigate } from "react-router";
import { useRegister } from "@/hooks/useRegister";
import { useState } from "react";
import "./Form.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending } = useRegister();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate({ email: email, password: password });
      }}
      className="form__signup"
    >
      <h1>Sign Up</h1>
      <section className="form__section">
        <Label htmlFor="email">Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
          placeholder="Email"
        />
      </section>
      <section className="form__section">
        <Label htmlFor="password">Password</Label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          type="password"
          placeholder="Password"
        />
      </section>
      <Button disabled={isPending} variant="secondary" type="submit">
        {isPending ? (
          <>
            <Spinner /> Signing up...
          </>
        ) : (
          "Sign Up"
        )}
      </Button>
      <section className="form__bottom">
        <Button
          className="text-amber-50"
          variant="link"
          onClick={() => navigate("/form/login")}
        >
          Already have an account?
        </Button>
      </section>
    </form>
  );
}
