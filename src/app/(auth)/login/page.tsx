import AuthForm from "@/components/AuthForm";
import { loginFields } from "@/constants";

export default function Page() {
  const login = () => {
    console.log("login");
  };
  return (
    <main>
      <AuthForm title="Login" desc="Login to have full access" fields={loginFields} handleSubmit={login} />
    </main>
  );
}
