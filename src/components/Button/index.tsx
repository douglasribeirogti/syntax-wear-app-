interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

<<<<<<< HEAD
export const Button = ({ children, variant = "primary", size = "md" }: ButtonProps) => {
=======
export const Button = ({
  children,
  variant = "primary",
  size = "md",
}: ButtonProps) => {
>>>>>>> 5133ce810d3b5c0a4a86ba892e1c0bdff8f436bb
  const buttonStyles = {
    base: "flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer transition-colors duration-200 font-medium rounded-full transition py-2.5",
    variant: {
      primary: "bg-white text-[#6329A2] hover:bg-gray-100",
      secondary:
        "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    },
    size: {
      sm: "px-5",
      md: "px-8",
      lg: "px-10",
    },
  };

<<<<<<< HEAD
  const className = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`; 
=======
  const className = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`;
>>>>>>> 5133ce810d3b5c0a4a86ba892e1c0bdff8f436bb

  return <button className={className}>{children}</button>;
};
