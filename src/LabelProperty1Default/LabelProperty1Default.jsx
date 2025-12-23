export const LabelProperty1Default = ({
  tag = "First Name",
  placeholder = "Jane",
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "flex flex-col gap-2 items-start justify-start relative " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text-[#ffffff] text-left font-['Raleway-Regular',_sans-serif] text-sm leading-[120%] font-normal relative flex items-center justify-start">
        {tag}{" "}
      </div>
      <div className="bg-[#ffffff] rounded-md pt-2.5 pr-3 pb-2.5 pl-3 flex flex-row gap-0 items-center justify-start self-stretch shrink-0 h-10 relative overflow-hidden">
        <div className="text-[#9b9ba0] text-left font-['Inter-Regular',_sans-serif] text-base font-normal relative flex items-center justify-start">
          {placeholder}{" "}
        </div>
      </div>
    </div>
  );
};
