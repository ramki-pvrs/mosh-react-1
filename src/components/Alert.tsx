import React, { ReactNode } from "react";

//children is a special props
//so from Apps you can pass the HTML tag text part as variable to children here
//to Alert message for example

//another example could be Button name as text passed from App to Button component
interface Props {
  //children: string; but thats pure text;
  //say you want to pass HTML content like Ramki's  <span>Alert</span>
  children: ReactNode; //you can pass child text as Ramki's Alert

  //for that use ReactNode
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
