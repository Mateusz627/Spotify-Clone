import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={`bg-green-500 rounded-full px-3 py-3 text-black font-bold hover:opacity-75 transition ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;