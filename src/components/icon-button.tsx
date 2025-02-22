import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "p-2 bg-gray-500 text-blue font-semibold rounded-xl w-fit cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900",
        className
      )}
      {...props}
    />
  );
}
