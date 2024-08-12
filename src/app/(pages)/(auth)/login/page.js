import LoginForm from "@/components/auth/LoginForm";
import SocialLogins from "@/components/auth/SocialLogins";

const LoginPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border shadow border-gray-700/20 rounded-md">
        <LoginForm />
        <SocialLogins />
      </div>
    </section>
  );
};

export default LoginPage;
