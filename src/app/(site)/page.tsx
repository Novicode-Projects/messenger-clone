import Image from "next/image";
import { AuthForm } from "./components/AuthForm";

export default function Home() {
  return (
    <main
      className="
            flex 
            min-h-full 
            flex-col 
            justify-center 
            py-12
            sm:px-6
            lg:px-8
            bg-gray-100
            ">
      <div className="sm:mx-auto sm:w-full sm:max-md">
        <Image
          src="/images/logo.png"
          alt="Logo Messenger"
          height="48"
          width="48"
          className="mx-auto w-auto"
        />
        <h1
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900">
          Sign in to your account
        </h1>
      </div>
      <AuthForm />
    </main>
  );
}
