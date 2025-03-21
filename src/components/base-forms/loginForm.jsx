import { useState } from "react";
import { Field } from "./fields.jsx";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <Field
        type={2}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Field
        type={3}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button type={2} value="Login" />
      <div className="items-center flex">
        <button className="self-center px-3.5 py-1 shadow-lg rounded-xs duration-150 text-lght-primary bg-pop-primary hover:bg-pop-secondary ">
          Login
        </button>
      </div>
    </form>
  );
};
