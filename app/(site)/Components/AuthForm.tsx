"use client";

import Button from "@/app/Components/Button";
import Input from "@/app/Components/Inputs/Input";
import axios from "axios";
import { useCallback, useState } from "react";
import {
  FieldValue,
  FieldValues,
  useForm,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";

type Props = {};

type Varient = "LOGIN" | "REGISTER";

export default function AuthForm({}: Props) {
  const [varient, setVarient] = useState<Varient>("LOGIN");
  const [isLodaing, setIsLoading] = useState<boolean>(false);

  const toggleVarient = useCallback(() => {
    if (varient === "LOGIN") {
      setVarient("REGISTER");
    } else {
      setVarient("REGISTER");
    }
  }, [varient]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    if (varient === "REGISTER") {
        await axios.post('/api/register',data)
    }
    if (varient === "LOGIN") {
      // Next auth sign in
    }
  };

  const socialActions = () => {
    setIsLoading(true);
    // NextAuth Social sign in
  };

  return (
    <div
      className="
      mt-8
      mx-auto
      sm:w-full 
      sm:max-w-md 
    "
    >
      <div
        className="
              bg-white
              px-4
              py-8
              shadow
              sm:rounded-lg
              sm:px-10
            "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {varient === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLodaing} fullwidth type="submit">
              {varient === "LOGIN" ? "SignIn" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="
                    absolute
                    inset-0
                    flex
                    items-center
                "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
