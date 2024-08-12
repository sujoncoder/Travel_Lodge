import RegistrationForm from "@/components/auth/RegistrationForm";
import SocialLogins from "@/components/auth/SocialLogins";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border shadow border-gray-700/20 rounded-md">
        <RegistrationForm />
        <SocialLogins />
      </div>
    </section>
  );
};

export default Register;
