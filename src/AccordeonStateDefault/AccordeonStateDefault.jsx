export const AccordeonStateDefault = ({
  title = "5-Star Service",
  description = "Experience local life firsthand by sharing a warm, home-hosted coffee and cake with a Slovakian family in Bratislava—a moment you won&#039;t find anywhere else. You&#039;ll also enjoy a visit to the historic Göttweig Abbey in Austria, complete with a local wine tasting.",
  description2 = true,
  food = true,
  adventure = true,
  culture = true,
  star = true,
  dining = true,
  experience = true,
  value = true,
  ship = true,
  state = "default",
  className,
  ...props
}) => {
  const variantsClassName = "state-" + state;

  return (
    <div
      className={
        "bg-[rgba(255,255,255,0.10)] rounded-md p-5 flex flex-col gap-4 items-start justify-start relative overflow-hidden " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="flex flex-row gap-1.5 items-center justify-start self-stretch shrink-0 relative">
        {culture && (
          <>
            <img
              className="shrink-0 w-5 h-5 relative overflow-visible"
              style={{ aspectRatio: "1" }}
              src="diversity-10.svg"
            />
          </>
        )}
        {adventure && (
          <>
            <img
              className="shrink-0 w-5 h-5 relative overflow-visible"
              style={{ aspectRatio: "1" }}
              src="explore0.svg"
            />
          </>
        )}
        {food && (
          <>
            <img
              className="shrink-0 w-5 h-5 relative overflow-visible"
              style={{ aspectRatio: "1" }}
              src="ramen-dining0.svg"
            />
          </>
        )}
        {star && (
          <>
            <img
              className="shrink-0 w-5 h-5 relative overflow-visible"
              style={{ aspectRatio: "1" }}
              src="award-star0.svg"
            />
          </>
        )}
        {dining && (
          <>
            <img
              className="shrink-0 w-5 h-5 relative overflow-visible"
              style={{ aspectRatio: "1" }}
              src="hand-meal0.svg"
            />
          </>
        )}
        {ship && (
          <>
            <img
              className="shrink-0 w-5 h-5 relative overflow-visible"
              style={{ aspectRatio: "1" }}
              src="directions-boat0.svg"
            />
          </>
        )}
        {experience && (
          <>
            <img
              className="shrink-0 w-5 h-5 relative overflow-visible"
              style={{ aspectRatio: "1" }}
              src="bookmark-heart0.svg"
            />
          </>
        )}
        <div className="text-[#ffffff] text-left font-['Inter-Medium',_sans-serif] text-base leading-[140%] font-medium relative self-stretch flex-1 flex items-center justify-start">
          {title}{" "}
        </div>
        <img
          className="shrink-0 w-6 h-6 relative overflow-visible"
          style={{ aspectRatio: "1" }}
          src="add0.svg"
        />
      </div>
      {description2 && (
        <>
          <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-base leading-[140%] font-medium relative self-stretch flex items-center justify-start">
            {description}{" "}
          </div>
        </>
      )}
    </div>
  );
};
