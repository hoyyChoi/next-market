import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors: FieldErrors;
}
const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className='relative w-full'>
      {formatPrice && (
        <span className='absolute text-neutral-700 top-5 left-2'>W</span>
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=''
        type={type}
        className={`
      w-full
      p-4
      pt-10
      font-light
      bg-white
      rounded-md
      border-2
      outline-none
      disabled:opacity-70
      disabled:cursor-not-allowed
      ${formatPrice ? "pl-9" : "pl-4"}
      ${errors[id] ? "border-rose-500" : "border-neutral-300"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}

      `}
      />
      <label
        className={`absolute text-md duration-150 transform -transalte-y-3 top-5 z-10 origin-[0]  ${
          formatPrice ? "left-9" : "left-4"
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-foucs:-translate-y-4 peer-focus:text-neutral-700       
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
