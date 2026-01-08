import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="flex items-center gap-1 bg-[#E5E5FD] text-black p-2 rounded-md"
    />
  );
};
