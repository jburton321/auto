export const Frame5048 = ({
  labelInput = "new ship!",
  className,
  ...props
}) => {
  return (
    <div
      className={
        "bg-neutral-white flex flex-row gap-0 items-center justify-start relative " +
        className
      }
      style={{
        boxShadow:
          "var(--shadow-light-2-box-shadow,  0px 0px 10px 0px rgba(0, 0, 0, 0.30))",
        transformOrigin: "0 0",
        transform: "rotate(-45deg) scale(1, 1)",
      }}
    >
      <div className="bg-button-green-default pt-2 pr-2.5 pb-2 pl-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div className="text-neutral-white text-left font-body-bold-font-family text-body-bold-font-size leading-body-bold-line-height font-body-bold-font-weight relative">
          {labelInput}{" "}
        </div>
      </div>
      <img
        className="shrink-0 w-9 h-9 absolute right-[-72px] top-[50%] overflow-visible"
        style={{
          translate: "0 -50%",
          transform: "translate(-25.46px, 25.46px)",
        }}
        src="rectangle-44260.svg"
      />
      <img
        className="shrink-0 w-9 h-9 absolute left-[-36px] top-[50%] overflow-visible"
        style={{ translate: "0 -50%" }}
        src="rectangle-44250.svg"
      />
    </div>
  );
};
