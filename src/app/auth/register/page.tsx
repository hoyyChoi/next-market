"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
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

  const onsubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/register", body);
      console.log(data);
      router.push("/auth/login");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='grid h-[calc(100vh_-_56px)] place-items-center'>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className='flex flex-col justify-center gap-4 min-w-[350px]'
      >
        <h1 className='text-2xl'>Register</h1>
        <Input
          id='email'
          label='Email'
          disabled={isLoading}
          register={register}
          errors={errors}
          required={true}
        />
        <Input
          id='name'
          label='Name'
          disabled={isLoading}
          register={register}
          errors={errors}
          required={true}
        />
        <Input
          id='password'
          label='Password'
          type='password'
          disabled={isLoading}
          register={register}
          errors={errors}
          required={true}
        />
        <Button label='register' />
        <div className='text-center'>
          <p className='text-gray-400'>
            Already a member?{" "}
            <Link href='/auth/login' className='text-black hover:underline'>
              Login
            </Link>
            `
          </p>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
