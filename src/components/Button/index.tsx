import React, { ReactText } from "react";
import "./Button.scss";

interface ButtonProps {
    children: string | React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button type="button" className="btn">
            {children}
        </button>
    );
};
