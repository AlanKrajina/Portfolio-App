import React from "react";

interface Props {
  buttonFunction: any;
  buttonTitle: string | React.ReactNode;
  styling: string;
}

const Button: React.FC<Props> = ({ buttonFunction, buttonTitle, styling }) => {
  return (
    <button className={styling} type="button" onClick={buttonFunction}>
      {buttonTitle}
    </button>
  );
};

export default React.memo(Button);
