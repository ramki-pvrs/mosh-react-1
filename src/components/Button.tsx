//import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; //enum of button colors; ? means optional; default set below in Button class to primary
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
