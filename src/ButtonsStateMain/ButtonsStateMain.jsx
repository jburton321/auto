export const ButtonsStateMain = ({
  text = "SUBMIT",
  state = "white",
  className,
  ...props
}) => {
  const variantsClassName = "state-" + state;

  return (
    <div
      className={
        "bg-green-600 rounded-[100px] pt-2 pr-8 pb-2 pl-8 flex flex-row gap-0 items-center justify-center relative " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text-white text-center font-['Raleway-SemiBold',_sans-serif] text-base leading-[160%] font-semibold uppercase relative flex items-center justify-center">
        {text}{" "}
      </div>
    </div>
  );
};
