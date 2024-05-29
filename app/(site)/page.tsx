import Image from "next/image";
import AuthForm from "./Components/AuthForm";
export default function Home() {
  return (
    <>
      <div
        className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm: px-6
        lg-px-8
        "
      >
        <div
          className="
             sm:mx-auto
             sm:w-full
             sm:max-w-md
            "
        >
          <Image
            alt="logo"
            width="1"
            height="1"
            className="mx-auto w-auto"
            src="/images/logo.png"
          />
          <h1 className="text-center mt-4 text-3xl font-bold">
            Sign in to your account
          </h1>
        </div>
        <AuthForm/>
      </div>
    </>
  );
}
