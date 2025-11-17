import { Input } from "@/ui/input";
import { Spinner } from "@/ui/spinner";
import { Button } from "@/ui/button";
import { Label } from "@radix-ui/react-label";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useLogin } from "@/hooks/useLogin.ts";

import "./Form.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate, isPending } = useLogin();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate({ email, password });
      }}
      className="form__signup"
    >
      <h1>Login</h1>
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
            <Spinner /> Logging in...
          </>
        ) : (
          "Log In"
        )}
      </Button>
      <section className="form__bottom">
        <Button
          className="text-amber-50"
          variant="link"
          onClick={() => navigate("/form/signup")}
        >
          Create an account
        </Button>
      </section>
    </form>
  );
}
