import { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const InputField = ({ label, ...props }: InputFieldProps) => {
  return (
    <label className="flex flex-col gap-1 ">
      {label}
      <input {...props} className="border p-1.5 rounded-md " />
    </label>
  );
};
