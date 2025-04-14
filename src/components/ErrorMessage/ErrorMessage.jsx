import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={s.text}>
        Whoops, something went wrong! Please try reloading this page!
      </p>
    </>
  );
};

export default ErrorMessage;
