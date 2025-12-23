export const AnimatedTitleProperty1Default = ({
  property1 = "default",
  text = "undefined",
  text2 = "undefined",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={"h-[105px] relative " + className + " " + variantsClassName}
    >
      <div
        className="text-left font-['BarlowSemiCondensed-ExtraBold',_sans-serif] text-[113.64058685302734px] leading-none font-extrabold absolute left-0 top-[-9px]"
        style={{
          background:
            "linear-gradient(270deg, rgba(179, 47, 255, 1.00) 0%,rgba(255, 54, 124, 1.00) 100%)",
          backgroundClip: "text",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
        }}
      >
        BLOWOUT SALE{" "}
      </div>
      <img
        className="h-[auto] absolute left-0 top-[-9px] overflow-visible"
        style={{ opacity: "0.5", mixBlendMode: "plus-lighter" }}
        src="group-240.svg"
      />
    </div>
  );
};
