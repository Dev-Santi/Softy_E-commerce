import "../../scss/components/_buttons.scss";

const Button = ({
  className,
  children,
}: {
  className?: string;
  children: JSX.Element | string;
}) => {
  return (
    <button title='button' type='button' className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
