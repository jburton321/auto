import { Frame5048 } from "../Frame5048/Frame5048.jsx";
import { ButtonsStateMain } from "../ButtonsStateMain/ButtonsStateMain.jsx";
import { ButtonsStateWhite } from "../ButtonsStateWhite/ButtonsStateWhite.jsx";
import { AccordeonStateDefault } from "../AccordeonStateDefault/AccordeonStateDefault.jsx";
import { AnimatedTitleProperty1Default } from "../AnimatedTitleProperty1Default/AnimatedTitleProperty1Default.jsx";
import { LabelProperty1Default } from "../LabelProperty1Default/LabelProperty1Default.jsx";
import { ButtonsStateTeal } from "../ButtonsStateTeal/ButtonsStateTeal.jsx";

export const Desktop = ({ className, ...props }) => {
  return (
    <div
      className={
        "bg-[#ffffff] flex flex-col gap-0 items-center justify-start relative " +
        className
      }
    >
      <div
        className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 h-[850px] relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to left, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50))",
          background: "url(hero0.png) center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-6 pr-20 pb-6 pl-20 flex flex-row items-center justify-between self-stretch shrink-0 relative overflow-hidden">
          <div className="shrink-0 w-[200px] h-[42.55px] relative overflow-hidden">
            <div className="flex flex-col gap-0 items-start justify-start absolute right-0 left-0 bottom-0 top-0 overflow-hidden">
              <div className="pr-[11.27px] pl-[11.27px] flex flex-col gap-0 items-center justify-center shrink-0 w-[200px] h-[42.55px] relative overflow-hidden">
                <img
                  className="shrink-0 w-[177.47px] h-[42.55px] relative overflow-visible"
                  src="s-x-3-cp-m-1-c-dtr-us-zzk-guk-s-iy-kk-svg1.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-start justify-start shrink-0 w-[908px] relative">
            <div className="bg-[rgba(255,255,255,0.10)] rounded-[30px] flex flex-row gap-4 items-center justify-center flex-1 h-[31px] relative">
              <div
                className="text-white text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-none font-semibold uppercase relative"
                style={{
                  letterSpacing: "-0.01em",
                  webkitTextStroke: "0.8781751394271851px transparent",
                }}
              >
                Home{" "}
              </div>
            </div>
            <div className="bg-green-600 rounded pt-2.5 pr-3 pb-2.5 pl-3 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
              <div
                className="text-white text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-none font-semibold uppercase relative"
                style={{
                  letterSpacing: "-0.01em",
                  webkitTextStroke: "0.8781751394271851px transparent",
                }}
              >
                ITINERARY{" "}
              </div>
            </div>
            <div className="bg-green-600 rounded pt-2.5 pr-3 pb-2.5 pl-3 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
              <div
                className="text-white text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-none font-semibold uppercase relative"
                style={{
                  letterSpacing: "-0.01em",
                  webkitTextStroke: "0.8781751394271851px transparent",
                }}
              >
                AMENITIES{" "}
              </div>
            </div>
            <div className="bg-green-600 rounded pt-2.5 pr-3 pb-2.5 pl-3 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
              <div
                className="text-white text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-none font-semibold uppercase relative"
                style={{
                  letterSpacing: "-0.01em",
                  webkitTextStroke: "0.8781751394271851px transparent",
                }}
              >
                SHIP{" "}
              </div>
            </div>
            <div className="bg-green-600 rounded pt-2.5 pr-3 pb-2.5 pl-3 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
              <div
                className="text-white text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-none font-semibold uppercase relative"
                style={{
                  letterSpacing: "-0.01em",
                  webkitTextStroke: "0.8781751394271851px transparent",
                }}
              >
                EXCURSIONS{" "}
              </div>
            </div>
            <div className="bg-green-600 rounded pt-2.5 pr-3 pb-2.5 pl-3 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
              <div
                className="text-white text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-none font-semibold uppercase relative"
                style={{
                  letterSpacing: "-0.01em",
                  webkitTextStroke: "0.8781751394271851px transparent",
                }}
              >
                INCLUSIONS{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="pr-20 pl-20 flex flex-row items-center justify-between self-stretch shrink-0 relative">
          <div className="flex flex-col gap-10 items-start justify-center shrink-0 relative">
            <div className="pt-[10.74px] flex flex-col gap-[28.65px] items-center justify-start shrink-0 relative">
              <img
                className="shrink-0 w-[657.17px] h-[206px] absolute left-[2.08px] top-[18.88px] overflow-visible"
                src="subtract0.svg"
              />
              <div className="text-[#ffffff] text-center uppercase relative">
                <span>
                  <span className="choose-your-cruise-save-big-on-exclusive-balcony-packages-span">
                    Budapest
                  </span>
                  <span className="choose-your-cruise-save-big-on-exclusive-balcony-packages-span2">
                    to
                  </span>
                  <span className="choose-your-cruise-save-big-on-exclusive-balcony-packages-span">
                    Munich
                  </span>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
                <div
                  className="text-[#ffffff] text-center font-['Montserrat-Black',_sans-serif] text-[58px] leading-[85%] font-black uppercase relative"
                  style={{
                    letterSpacing: "-0.01em",
                    webkitTextStroke: "2.0554046630859375px transparent",
                  }}
                >
                  Danube Delights{" "}
                </div>
                <div
                  className="text-[#ffffff] text-center font-['Montserrat-Bold',_sans-serif] text-[81.91893005371094px] leading-[85%] font-bold relative"
                  style={{
                    letterSpacing: "-0.01em",
                    webkitTextStroke: "2.0554046630859375px transparent",
                  }}
                >
                  RIVER CRUISE{" "}
                </div>
              </div>
              <div
                className="text-[#ffffff] text-center font-['Montserrat-Bold',_sans-serif] text-[32.23178482055664px] leading-[85%] font-bold relative"
                style={{
                  letterSpacing: "0.02em",
                  webkitTextStroke: "1.572508454322815px transparent",
                }}
              >
                8-Day/7-Night{" "}
              </div>
              <div
                className="pt-[17.91px] pb-[17.91px] flex flex-row gap-[42.98px] items-center justify-center shrink-0 w-[658.96px] relative"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(225, 177, 118, 1.00) 0%,rgba(197, 102, 16, 1.00) 100%), linear-gradient(to left, #ffffff, #ffffff)",
                }}
              >
                <div
                  className="text-[#ffffff] text-right font-['Raleway-ExtraBold',_sans-serif] text-[41px] leading-[85%] font-extrabold relative"
                  style={{
                    letterSpacing: "-0.01em",
                    webkitTextStroke: "1.572508454322815px transparent",
                  }}
                >
                  Limited Time Speciality Fare{" "}
                </div>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2 items-center justify-start shrink-0 w-[658.96px] relative">
              <div className="text-[#ffffff] text-center font-['Raleway-Medium',_sans-serif] text-2xl leading-[130%] font-medium relative flex items-center justify-center">
                Your journey in a contemporary Riviera Deck stateroom{" "}
              </div>
              <div
                className="bg-[#ffffff] self-stretch shrink-0 h-px relative overflow-hidden"
                style={{ opacity: "0.7" }}
              ></div>
              <div className="rounded-[50px] pr-4 pl-4 flex flex-row gap-0 items-center justify-start shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Montserrat-Bold',_sans-serif] text-2xl leading-8 font-bold relative flex items-center justify-start">
                  From $3,995/{" "}
                </div>
                <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xl leading-[25.6px] font-bold relative flex items-center justify-start">
                  pp{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-white rounded-[22.23px] border-solid border-[rgba(207,214,222,0.98)] border-[1.11px] pb-[33.34px] flex flex-col gap-0 items-center justify-start shrink-0 w-[400.08px] min-w-[400.08px] relative overflow-hidden">
            <div
              className="border-solid border-highlight-bluelight border-[1.11px] flex flex-col gap-[11.11px] items-start justify-start self-stretch shrink-0 h-[183.37px] relative overflow-hidden"
              style={{
                background: "url(frame-50350.png) center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Frame5048
                labelInput="EMERALD CRUISE"
                className="!shrink-0"
              ></Frame5048>
            </div>
            <div className="bg-neutral-bg-10 border-solid border-[#f6f6f6] border-b-[1.11px] pt-[26.67px] pb-[26.67px] flex flex-col gap-[26.67px] items-start justify-start self-stretch shrink-0 relative">
              <div className="pr-[22.23px] pl-[22.23px] flex flex-row gap-[11.11px] items-center justify-center self-stretch shrink-0 relative">
                <div className="text-neutral-bg-80 text-center font-['Raleway-ExtraBold',_sans-serif] text-[26.67174530029297px] leading-[31.12px] font-extrabold uppercase relative flex-1">
                  7-Night River Cruise{" "}
                </div>
              </div>
              <div className="pr-[22.23px] pl-[22.23px] flex flex-col gap-[13.34px] items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row gap-[11.11px] items-center justify-start shrink-0 relative">
                  <img
                    className="shrink-0 w-[26.67px] h-[26.67px] relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="article0.svg"
                  />
                  <div className="text-neutral-bg-80 text-left font-['-',_sans-serif] text-[17.781164169311523px] leading-[0undefined] font-normal relative">
                    <span>
                      <span className="itinerary-danube-delights-span">
                        Itinerary:
                      </span>
                      <span className="itinerary-danube-delights-span2"></span>
                      <span className="itinerary-danube-delights-span3">
                        Danube Delights
                      </span>
                    </span>{" "}
                  </div>
                </div>
                <div className="flex flex-row gap-[11.11px] items-start justify-start self-stretch shrink-0 relative">
                  <img
                    className="shrink-0 w-[26.67px] h-[26.67px] relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="directions-boat0.svg"
                  />
                  <div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
                    <div className="text-neutral-bg-80 text-left font-['Raleway-Bold',_sans-serif] text-[17.781164169311523px] leading-[22.23px] font-bold relative">
                      Departure:{" "}
                    </div>
                    <div className="text-neutral-bg-80 text-left font-['Raleway-Medium',_sans-serif] text-[17.781164169311523px] leading-[22.23px] font-medium relative self-stretch">
                      Sailings available Dec 2026 &amp; 2027{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[11.11px] items-center justify-start shrink-0 w-[216.71px] relative">
                  <img
                    className="shrink-0 w-[26.67px] h-[26.67px] relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="nest-clock-farsight-analog0.svg"
                  />
                  <div className="flex flex-row gap-[4.45px] justify-start shrink-0 relative">
                    <div className="text-neutral-bg-80 text-left font-['Raleway-Bold',_sans-serif] text-[17.781164169311523px] leading-[22.23px] font-bold relative">
                      Duration:{" "}
                    </div>
                    <div className="text-neutral-bg-80 text-left font-['Raleway-Medium',_sans-serif] text-[17.781164169311523px] leading-[22.23px] font-medium relative">
                      8 Days{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[11.11px] items-center justify-start shrink-0 relative">
                  <img
                    className="shrink-0 w-[26.67px] h-[26.67px] relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="family-star0.svg"
                  />
                  <div className="text-neutral-bg-80 text-left font-['-',_sans-serif] text-[17.781164169311523px] leading-[22.23px] font-normal relative">
                    <span>
                      <span className="cabin-riviera-deck-stateroom-span">
                        Cabin:
                      </span>
                      <span className="cabin-riviera-deck-stateroom-span2"></span>
                      <span className="cabin-riviera-deck-stateroom-span3">
                        Riviera Deck Stateroom
                      </span>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[22.23px] flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
              <div className="flex flex-col gap-[11.11px] items-start justify-center flex-1 relative">
                <div className="text-[#353739] text-center font-['Raleway-Black',_sans-serif] text-[17.781164169311523px] leading-[22.23px] font-black relative self-stretch">
                  WAS{" "}
                </div>
                <div
                  className="text-neutral-bg-80 text-center font-['Montserrat-Regular',_sans-serif] text-[26.67174530029297px] leading-[24.45px] font-normal relative self-stretch"
                  style={{ textDecoration: "line-through" }}
                >
                  $7990{" "}
                </div>
              </div>
              <div className="border-solid border-highlight-bluelight border-r-[1.11px] border-l-[1.11px] pr-[22.23px] pl-[22.23px] flex flex-col gap-[6.67px] items-center justify-start shrink-0 relative">
                <div
                  className="text-neutral-bg-80 text-center font-['Montserrat-ExtraBold',_sans-serif] text-[35.56232833862305px] leading-[42.23px] font-extrabold relative"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  $3,995{" "}
                </div>
                <div className="text-neutral-bg-80 text-center font-['Raleway-SemiBold',_sans-serif] text-[17.781164169311523px] leading-[26.67px] font-semibold relative">
                  Per Person{" "}
                </div>
              </div>
              <div className="pl-[13.34px] flex flex-col gap-0 items-start justify-start flex-1 relative">
                <div className="text-[#c56610] text-left font-['Raleway-Black',_sans-serif] text-[15px] leading-[22.23px] font-black relative">
                  Exclusive{" "}
                </div>
                <div
                  className="text-[#c56610] text-left font-['Raleway-Black',_sans-serif] text-lg leading-[22.23px] font-black uppercase relative self-stretch"
                  style={{ letterSpacing: "0.02em" }}
                >
                  FARE{" "}
                </div>
              </div>
            </div>
            <div className="pr-[33.34px] pl-[33.34px] flex flex-col gap-[11.11px] items-center justify-start self-stretch shrink-0 relative">
              <ButtonsStateMain
                text="learn more"
                state="main"
                className="!rounded-[111.13px] !pt-[8.89px] !pr-[35.56px] !pb-[8.89px] !pl-[35.56px] !shrink-0 !w-[333.4px]"
              ></ButtonsStateMain>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[120px] pb-[120px] flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative">
        <div
          className="rounded-[32px] p-16 flex flex-row gap-24 items-center justify-center shrink-0 relative"
          style={{
            background:
              "linear-gradient(to left, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60))",
            background: "url(section-activities-cta0.png) center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pr-4 pl-4 flex flex-col gap-6 items-center justify-start shrink-0 w-[474px] relative">
            <div className="self-stretch shrink-0 h-[276px] static">
              <img
                className="rounded-lg flex flex-col gap-0 items-start justify-start w-[223.28px] h-[219.84px] absolute left-[234.72px] top-7 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to left, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30))",
                  objectFit: "cover",
                  aspectRatio: "223.28/219.84",
                }}
                src="image-cruise0.png"
              />
              <img
                className="rounded-lg flex flex-col gap-0 items-start justify-start w-[223.28px] h-[219.84px] absolute left-4 top-7 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to left, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30))",
                  objectFit: "cover",
                  aspectRatio: "223.28/219.84",
                }}
                src="image-cruise1.png"
              />
              <img
                className="rounded-lg flex flex-col gap-0 items-start justify-start w-[291.38px] h-[276px] absolute left-[91.31px] top-0 overflow-hidden"
                style={{
                  boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                  objectFit: "cover",
                }}
                src="image-cruise2.png"
              />
            </div>
            <div
              className="flex flex-row gap-8 items-center justify-start shrink-0 relative"
              style={{
                transformOrigin: "0 0",
                transform: "rotate(0deg) scale(1, -1)",
              }}
            >
              <div
                className="bg-[#ffffff] rounded-[50%] border-solid border-[#ffffff] border-[1.17px] shrink-0 w-4 h-4 relative"
                style={{ aspectRatio: "1" }}
              ></div>
              <div
                className="bg-[rgba(0,0,0,0.00)] rounded-[50%] border-solid border-[#ffffff] border-[1.17px] shrink-0 w-4 h-4 relative"
                style={{ aspectRatio: "1" }}
              ></div>
              <div
                className="bg-[rgba(0,0,0,0.00)] rounded-[50%] border-solid border-[#ffffff] border-[1.17px] shrink-0 w-4 h-4 relative"
                style={{ aspectRatio: "1" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-center shrink-0 relative">
            <div
              className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[50px] leading-[120%] font-bold relative flex items-center justify-start"
              style={{ letterSpacing: "-1.28px" }}
            >
              Discover &#039;Old Europe&#039;{" "}
            </div>
            <div
              className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-base leading-[140%] font-medium relative self-stretch flex items-center justify-start"
              style={{ letterSpacing: "0.02em" }}
            >
              Discover &#039;Old Europe&#039; on this memorable eight-day
              journey through four fascinating countries. On board your
              contemporary Emerald Cruises Star-Ship, you&#039;ll cruise the
              mighty Danube, discovering magnificent capitals and quaint towns.
              Delight in the ever-changing views from your stylish stateroom,
              knowing that you only have to unpack once for your entire journey.{" "}
            </div>
            <ButtonsStateWhite
              text="learn more"
              className="!shrink-0 !w-[350px]"
            ></ButtonsStateWhite>
          </div>
        </div>
      </div>
      <div className="bg-[#e4f1f7] pl-20 flex flex-row items-center justify-between self-stretch shrink-0 relative">
        <div className="flex flex-row gap-16 items-center justify-start flex-1 max-w-[1440px] relative">
          <div className="flex flex-col gap-8 items-start justify-center shrink-0 relative">
            <div
              className="text-green-700 text-left font-['Raleway-Bold',_sans-serif] text-[50px] leading-[120%] font-bold relative flex items-center justify-start"
              style={{ letterSpacing: "-1.28px" }}
            >
              Your Journey Highlights{" "}
            </div>
            <div
              className="text-color-azure-25 text-left font-['Raleway-Medium',_sans-serif] text-base leading-[140%] font-medium relative self-stretch flex items-center justify-start"
              style={{ letterSpacing: "0.02em" }}
            >
              From the UNESCO-listed sites of Budapest to a local Bavarian
              sausage tasting in Regensburg, every day connects you meaningfully
              with your destination. Arrive early to explore Budapest&#039;s
              thermal baths, or explore Vienna&#039;s grand museums and sail
              through the enchanting, UNESCO-listed Wachau Valley.{" "}
            </div>
            <ButtonsStateMain
              text="View Itinerary"
              state="main"
              className="!shrink-0 !w-[350px]"
            ></ButtonsStateMain>
          </div>
          <img
            className="rounded-3xl flex flex-row gap-0 items-center justify-start flex-1 h-[504px] relative overflow-hidden"
            style={{ objectFit: "cover" }}
            src="image0.png"
          />
        </div>
      </div>
      <div
        className="pr-20 pl-20 flex flex-row gap-0 items-center justify-center self-stretch shrink-0 h-[800px] relative"
        style={{
          background:
            "linear-gradient(to left, rgba(0, 45, 48, 0.80), rgba(0, 45, 48, 0.80))",
          background: "url(section-form-30.png) center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="rounded-[32px] flex flex-row gap-24 items-center justify-center flex-1 max-w-[1440px] relative">
          <img
            className="rounded-[20px] flex flex-col gap-0 items-start justify-start flex-1 h-[400px] relative"
            style={{ objectFit: "cover" }}
            src="content-wrapper0.png"
          />
          <div className="flex flex-col gap-8 items-start justify-start shrink-0 w-[600px] relative">
            <div
              className="text-[#79bccd] text-left font-['Raleway-Regular',_sans-serif] text-[50px] leading-[120%] font-normal relative self-stretch flex items-center justify-start"
              style={{ letterSpacing: "-0.76px" }}
            >
              Emerald Panorama
              <br />
              Balcony Suite{" "}
            </div>
            <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-base leading-[140%] font-medium relative self-stretch flex items-center justify-start">
              These chic suites are perfect for viewing the scenery passing by.
              Our innovative all-weather balcony system allows the
              floor-to-ceiling window to drop down electronically, and an indoor
              decked area allows you to enjoy the sights in all their glory{" "}
            </div>
            <ButtonsStateWhite
              text="View Cabin"
              className="!shrink-0 !w-[350px]"
            ></ButtonsStateWhite>
          </div>
        </div>
        <div
          className="flex flex-row gap-8 items-center justify-start shrink-0 absolute left-[calc(50%_-_404px)] bottom-[151px]"
          style={{
            transformOrigin: "0 0",
            transform: "rotate(0deg) scale(1, -1)",
          }}
        >
          <div
            className="bg-[#ffffff] rounded-[50%] border-solid border-[#ffffff] border-[1.17px] shrink-0 w-4 h-4 relative"
            style={{ aspectRatio: "1" }}
          ></div>
          <div
            className="bg-[rgba(0,0,0,0.00)] rounded-[50%] border-solid border-[#ffffff] border-[1.17px] shrink-0 w-4 h-4 relative"
            style={{ aspectRatio: "1" }}
          ></div>
          <div
            className="bg-[rgba(0,0,0,0.00)] rounded-[50%] border-solid border-[#ffffff] border-[1.17px] shrink-0 w-4 h-4 relative"
            style={{ aspectRatio: "1" }}
          ></div>
        </div>
      </div>
      <div className="pt-[120px] pr-20 pb-[120px] pl-20 flex flex-col gap-16 items-center justify-center self-stretch shrink-0 relative">
        <div className="flex flex-col gap-8 items-center justify-start w-[100%] shrink-0 max-w-[750px] relative">
          <div
            className="text-green-700 text-center font-['Raleway-Bold',_sans-serif] text-[50px] leading-[120%] font-bold relative flex items-center justify-center"
            style={{ letterSpacing: "-1.28px" }}
          >
            Your Stylish Star-Ship{" "}
          </div>
          <div
            className="text-color-azure-25 text-center font-['Raleway-Medium',_sans-serif] text-base leading-[140%] font-medium relative self-stretch flex items-center justify-center"
            style={{ letterSpacing: "0.02em" }}
          >
            Our award-winning Emerald Star-Ships are designed for relaxed
            travel. Enjoy regionally inspired meals, unwind in the innovative
            pool that transforms into a cinema at night, or take in the views
            from the open-air Sun Deck.{" "}
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start justify-start w-[100%] shrink-0 h-[450px] max-w-[1440px] relative">
          <img
            className="rounded-xl flex flex-row gap-2.5 items-end justify-center self-stretch flex-1 relative"
            style={{ objectFit: "cover" }}
            src="frame-60480.png"
          />
          <img
            className="rounded-xl flex flex-row gap-2.5 items-end justify-center self-stretch flex-1 relative"
            style={{ objectFit: "cover" }}
            src="frame-60430.png"
          />
          <img
            className="rounded-xl flex flex-row gap-0 items-start justify-start self-stretch flex-1 relative"
            style={{ objectFit: "cover" }}
            src="frame-60431.png"
          />
          <img
            className="rounded-xl flex flex-row gap-2.5 items-end justify-center self-stretch flex-1 relative"
            style={{ objectFit: "cover" }}
            src="frame-60440.png"
          />
          <img
            className="rounded-xl flex flex-row gap-0 items-start justify-start self-stretch flex-1 relative"
            style={{ objectFit: "cover" }}
            src="frame-60450.png"
          />
        </div>
        <ButtonsStateMain
          text="View AMENITIES"
          state="main"
          className="!shrink-0 !w-[350px]"
        ></ButtonsStateMain>
      </div>
      <div
        className="pr-20 pl-20 flex flex-row gap-[231px] items-center justify-center self-stretch shrink-0 h-[800px] relative"
        style={{
          background:
            "linear-gradient(-90deg, rgba(0, 0, 0, 0.06) 0%,rgba(0, 0, 0, 0.54) 100%)",
          background: "url(content-wrapper1.png) center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-row gap-2.5 items-center justify-start flex-1 max-w-[1440px] relative">
          <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
            <div
              className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[50px] leading-[120%] font-bold relative flex items-center justify-start"
              style={{ letterSpacing: "-1.28px" }}
            >
              Explore Your Way{" "}
            </div>
            <div
              className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-base leading-[140%] font-medium relative self-stretch flex items-center justify-start"
              style={{ letterSpacing: "0.02em" }}
            >
              Your journey is designed with choice in mind. Join an
              EmeraldACTIVE bike tour along the Danube, or enjoy an EmeraldPLUS
              experience, like a home-hosted coffee and cake with a Slovakian
              family. The freedom is yours.{" "}
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
              <AccordeonStateDefault
                experience={false}
                adventure={false}
                star={false}
                description2={false}
                food={false}
                ship={false}
                dining={false}
                title="EmeraldPLUS Cultural Touches"
                className="!self-stretch !shrink-0"
              ></AccordeonStateDefault>
              <AccordeonStateDefault
                experience={false}
                description="Stay fit and engaged with guided activities like scenic bike tours through riverside towns and invigorating hikes to majestic landmarks like Dürnstein Castle and Gellert Hill."
                star={false}
                culture={false}
                description2={false}
                food={false}
                ship={false}
                dining={false}
                title="EmeraldACTIVE Adventures"
                className="!self-stretch !shrink-0"
              ></AccordeonStateDefault>
            </div>
            <ButtonsStateWhite
              text="View EXCURSIONS"
              className="!self-stretch !shrink-0"
            ></ButtonsStateWhite>
          </div>
        </div>
      </div>
      <div className="pt-[120px] pr-20 pb-[120px] pl-20 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative">
        <div className="rounded-[32px] flex flex-row gap-24 items-center justify-center w-[100%] shrink-0 max-w-[1440px] relative">
          <img
            className="rounded-[32px] flex flex-col gap-[231px] items-center justify-start flex-1 h-[400px] relative"
            style={{ objectFit: "cover" }}
            src="content-wrapper2.png"
          />
          <div className="flex flex-col gap-8 items-start justify-center shrink-0 relative">
            <div
              className="text-green-700 text-left font-['Raleway-Bold',_sans-serif] text-[50px] leading-[120%] font-bold relative flex items-center justify-start"
              style={{ letterSpacing: "-1.28px" }}
            >
              Thoughtful Inclusions{" "}
            </div>
            <div
              className="text-color-azure-25 text-left font-['Raleway-Medium',_sans-serif] text-base leading-[140%] font-medium relative self-stretch flex items-center justify-start"
              style={{ letterSpacing: "0.02em" }}
            >
              We take care of the details so you can relax. Your journey
              includes 7 nights on board, 20 delectable meals, complimentary
              wine and beer with lunch and dinner, airport transfers,
              complimentary wi-fi (Starlink wi-fi) and all tipping and
              gratuities.{" "}
            </div>
            <ButtonsStateMain
              text="View Itinerary"
              state="main"
              className="!shrink-0 !w-[350px]"
            ></ButtonsStateMain>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
        <div
          className="flex flex-row gap-0 items-center justify-center self-stretch shrink-0 relative"
          style={{
            background:
              "linear-gradient(to left, rgba(0, 45, 48, 0.70), rgba(0, 45, 48, 0.70))",
            background: "url(section-form-40.png) center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-green-700 flex flex-col gap-[28.07px] items-center justify-center shrink-0 w-[680.79px] h-[286px] relative">
            <img
              className="shrink-0 w-[643.94px] h-[143.88px] absolute left-[17.55px] top-[94.75px] overflow-visible"
              src="subtract1.svg"
            />
            <div
              className="text-[#ffffff] text-center font-['Montserrat-Black',_sans-serif] text-[69.86917114257812px] leading-[85%] font-black uppercase relative"
              style={{ letterSpacing: "-0.01em" }}
            >
              Enhance{" "}
            </div>
            <AnimatedTitleProperty1Default
              text="Your Journey"
              text2="Your Journey"
              className="!shrink-0 !w-[572px] !h-[69.88px]"
            ></AnimatedTitleProperty1Default>
          </div>
        </div>
        <div
          className="pt-5 pr-layout-margin pb-5 pl-layout-margin flex flex-col gap-6 items-center justify-center self-stretch shrink-0 relative"
          style={{
            background:
              "linear-gradient(270deg, rgba(225, 177, 118, 1.00) 0%,rgba(197, 102, 16, 1.00) 100%), linear-gradient(to left, #ffffff, #ffffff)",
          }}
        >
          <div className="text-[#ffffff] text-center font-['Raleway-SemiBold',_sans-serif] text-[40px] leading-[120%] font-semibold relative self-stretch flex items-center justify-center">
            Inquire about our spacious, luxurious suites. Upgrades are available
            for this itinerary.{" "}
          </div>
        </div>
      </div>
      <div className="bg-[#002d30] pr-20 pb-10 pl-20 flex flex-col gap-16 items-center justify-start self-stretch shrink-0 relative">
        <img
          className="shrink-0 w-16 h-[21px] relative overflow-visible"
          src="polygon-10.svg"
        />
        <div className="flex flex-col gap-16 items-center justify-start w-[100%] shrink-0 max-w-[1440px] relative">
          <div
            className="text-[#79bccd] text-center font-['Raleway-Regular',_sans-serif] text-[50px] leading-[120%] font-normal relative flex items-center justify-center"
            style={{ letterSpacing: "-0.76px" }}
          >
            Yes, I’d like more details on this Cruise{" "}
          </div>
          <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
            <div className="rounded-[20px] border-solid border-[rgba(225,177,118,0.30)] border flex flex-row gap-0 items-start justify-center w-[100%] shrink-0 max-w-[1440px] relative overflow-hidden">
              <img
                className="rounded-lg self-stretch shrink-0 w-[740px] relative"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 45, 48, 1.00) 100%)",
                  objectFit: "cover",
                }}
                src="figure-image-mdjpw-7-i-s-6-bir-xscs-wcjuuy-5-a-mle-jpg0.png"
              />
              <div className="pt-12 pr-12 pb-12 flex flex-col gap-8 items-start justify-start flex-1 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Raleway-Regular',_sans-serif] text-[32px] leading-7 font-normal relative self-stretch flex items-center justify-start">
                  There’s nothing to pay now.{" "}
                </div>
                <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                  <LabelProperty1Default className="!self-stretch !shrink-0"></LabelProperty1Default>
                  <LabelProperty1Default
                    placeholder="Smith"
                    tag="Last Name"
                    className="!self-stretch !shrink-0"
                  ></LabelProperty1Default>
                  <LabelProperty1Default
                    placeholder="jane.smith@gmail.com"
                    tag="Email"
                    className="!self-stretch !shrink-0"
                  ></LabelProperty1Default>
                  <LabelProperty1Default
                    placeholder="1234568796"
                    tag="Phone"
                    className="!self-stretch !shrink-0"
                  ></LabelProperty1Default>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                  <div className="rounded border-solid border-[#ffffff] border flex flex-row gap-0 items-center justify-center shrink-0 w-6 h-6 relative"></div>
                  <div className="text-[#ffffff] text-left font-['Raleway-Regular',_sans-serif] text-xs leading-[19.2px] font-normal relative flex-1 flex items-center justify-start">
                    <span>
                      <span className="yes-i-consent-to-be-contacted-by-emerald-cruises-and-its-partners-via-email-sms-text-message-and-phone-call-at-the-number-and-email-provided-to-discuss-this-offer-and-other-travel-opportunities-i-understand-that-my-consent-is-not-a-condition-of-purchase-and-that-message-and-data-rates-may-apply-by-consenting-i-confirm-i-have-read-and-agree-to-the-terms-and-conditions-and-the-privacy-policy-span">
                        Yes, I consent to be contacted by Emerald Cruises and
                        its partners via email, SMS text message, and phone call
                        at the number and email provided to discuss this offer
                        and other travel opportunities. I understand that my
                        consent is not a condition of purchase and that message
                        and data rates may apply. By consenting, I confirm I
                        have read and agree to the
                      </span>
                      <span className="yes-i-consent-to-be-contacted-by-emerald-cruises-and-its-partners-via-email-sms-text-message-and-phone-call-at-the-number-and-email-provided-to-discuss-this-offer-and-other-travel-opportunities-i-understand-that-my-consent-is-not-a-condition-of-purchase-and-that-message-and-data-rates-may-apply-by-consenting-i-confirm-i-have-read-and-agree-to-the-terms-and-conditions-and-the-privacy-policy-span2">
                        Terms and Conditions
                      </span>
                      <span className="yes-i-consent-to-be-contacted-by-emerald-cruises-and-its-partners-via-email-sms-text-message-and-phone-call-at-the-number-and-email-provided-to-discuss-this-offer-and-other-travel-opportunities-i-understand-that-my-consent-is-not-a-condition-of-purchase-and-that-message-and-data-rates-may-apply-by-consenting-i-confirm-i-have-read-and-agree-to-the-terms-and-conditions-and-the-privacy-policy-span">
                        and the
                      </span>
                      <span className="yes-i-consent-to-be-contacted-by-emerald-cruises-and-its-partners-via-email-sms-text-message-and-phone-call-at-the-number-and-email-provided-to-discuss-this-offer-and-other-travel-opportunities-i-understand-that-my-consent-is-not-a-condition-of-purchase-and-that-message-and-data-rates-may-apply-by-consenting-i-confirm-i-have-read-and-agree-to-the-terms-and-conditions-and-the-privacy-policy-span2">
                        Privacy Policy
                      </span>
                      <span className="yes-i-consent-to-be-contacted-by-emerald-cruises-and-its-partners-via-email-sms-text-message-and-phone-call-at-the-number-and-email-provided-to-discuss-this-offer-and-other-travel-opportunities-i-understand-that-my-consent-is-not-a-condition-of-purchase-and-that-message-and-data-rates-may-apply-by-consenting-i-confirm-i-have-read-and-agree-to-the-terms-and-conditions-and-the-privacy-policy-span">
                        .
                      </span>
                    </span>{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-0 items-start justify-center self-stretch shrink-0 relative">
                  <ButtonsStateTeal
                    state="teal"
                    className="!shrink-0"
                  ></ButtonsStateTeal>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-1.5 items-center justify-center self-stretch shrink-0 relative">
              <img
                className="shrink-0 w-4 h-4 relative overflow-visible"
                style={{ aspectRatio: "1" }}
                src="lock0.svg"
              />
              <div
                className="text-[#ffffff] text-center font-['Raleway-Italic',_sans-serif] text-xs leading-[19.2px] font-normal relative flex items-center justify-center"
                style={{ fontStyle: "italic" }}
              >
                Your information is secure{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-0 items-start justify-center self-stretch shrink-0 relative">
        <div
          className="flex flex-col gap-3 items-center justify-center self-stretch flex-1 relative"
          style={{
            background:
              "linear-gradient(270deg, rgba(225, 177, 118, 1.00) 0%,rgba(197, 102, 16, 1.00) 100%), linear-gradient(to left, #ffffff, #ffffff)",
          }}
        >
          <div className="pr-4 pl-4 flex flex-col gap-8 items-center justify-center shrink-0 w-[500px] relative">
            <div className="text-white text-center font-['Raleway-Bold',_sans-serif] text-2xl leading-[120%] font-bold relative self-stretch flex items-center justify-center">
              Limited Cabins Available{" "}
            </div>
            <div
              className="text-white text-center font-['Raleway-Medium',_sans-serif] text-base leading-[140%] font-medium relative self-stretch flex items-center justify-center"
              style={{ letterSpacing: "0.02em" }}
            >
              Secure your spot now and lock in the best available fares and
              flight offers for your desired sailing date.{" "}
            </div>
            <ButtonsStateWhite
              text="learn more"
              className="!self-stretch !shrink-0"
            ></ButtonsStateWhite>
          </div>
        </div>
        <img
          className="flex flex-row gap-8 items-center justify-start flex-1 h-[400px] relative overflow-visible"
          src="content-wrapper3.svg"
        />
      </div>
      <div className="bg-[#f7f5f2] pt-10 pr-4 pb-10 pl-4 flex flex-col gap-6 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
        <div className="flex flex-col gap-6 items-center justify-center w-[100%] shrink-0 max-w-[950px] relative">
          <div className="flex flex-col gap-6 items-center justify-start shrink-0 relative">
            <div className="shrink-0 w-[291.4px] h-[62px] relative overflow-hidden">
              <div className="flex flex-col gap-0 items-start justify-start absolute right-0 left-[0.000007310547516681254px] bottom-0 top-0 overflow-hidden">
                <div className="pr-[16.41px] pl-[16.41px] flex flex-col gap-0 items-center justify-center shrink-0 w-[291.4px] h-[62px] relative overflow-hidden">
                  <img
                    className="shrink-0 w-[258.57px] h-[62px] relative overflow-visible"
                    src="s-x-3-cp-m-1-c-dtr-us-zzk-guk-s-iy-kk-svg3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#59878c] rounded-[50px] pt-1 pr-4 pb-1 pl-4 flex flex-row gap-2 items-center justify-start shrink-0 relative overflow-hidden">
              <div className="flex flex-col gap-0 items-start justify-center shrink-0 w-4 h-4 relative">
                <div className="self-stretch flex-1 relative">
                  <img
                    className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                    src="svg-117869356760.svg"
                  />
                </div>
              </div>
              <div className="text-[#ffffff] text-left font-['RadioCanadaBig-Regular',_sans-serif] text-base leading-[25.6px] font-normal relative w-[116px] flex items-center justify-start">
                857-301-6798{" "}
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-center shrink-0 w-[358px] relative overflow-hidden">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-10 relative">
                <div className="bg-[#ffffff] rounded-[80px] self-stretch shrink-0 h-10 relative overflow-hidden">
                  <div className="flex flex-col gap-0 items-start justify-center w-4 h-4 absolute left-3 top-3">
                    <div className="self-stretch flex-1 relative">
                      <div className="flex flex-col gap-0 items-start justify-center w-4 h-4 absolute left-0 top-0">
                        <div className="self-stretch flex-1 relative">
                          <img
                            className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                            src="svg-96885816400.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-10 relative">
                <div className="bg-[#ffffff] rounded-[80px] self-stretch shrink-0 h-10 relative overflow-hidden">
                  <div className="flex flex-col gap-0 items-start justify-center w-4 h-4 absolute left-3 top-3">
                    <div className="self-stretch flex-1 relative">
                      <div className="h-[18px] absolute right-[-1px] left-[-1px] top-[-1px]">
                        <img
                          className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                          src="svg-141736636-7070.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-10 relative">
                <div className="bg-[#ffffff] rounded-[80px] self-stretch shrink-0 h-10 relative overflow-hidden">
                  <div className="flex flex-col gap-0 items-start justify-center w-4 h-4 absolute left-3 top-3">
                    <div className="self-stretch flex-1 relative">
                      <div className="flex flex-col gap-0 items-start justify-center w-4 h-4 absolute left-0 top-0">
                        <div className="self-stretch flex-1 relative">
                          <img
                            className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                            src="svg-126659329730.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start shrink-0 w-[644px] relative">
            <div className="text-[#1e1e1e] text-center font-['Raleway-Regular',_sans-serif] text-xs leading-[19.2px] font-normal relative self-stretch flex items-center justify-center">
              The distribution of the cruises and tours on this website is{" "}
              <br />
              managed by Scenic Tours (USA), Inc. of 4000 Hollywood Blvd., Suite
              625-S, Hollywood, Florida 33021{" "}
            </div>
            <div className="text-center font-['Raleway-Regular',_sans-serif] text-xs leading-[19.2px] font-normal relative self-stretch flex items-center justify-center">
              <span>
                <span className="the-government-s-foreign-travel-advice-page-offers-up-to-date-safety-information-on-all-your-cruise-tour-destinations-you-are-advised-to-check-this-information-at-https-travel-state-gov-span">
                  The government’s foreign travel advice page offers up-to-date
                  safety information on all your cruise/tour destinations. You
                  are advised to check this information at
                </span>
                <span className="the-government-s-foreign-travel-advice-page-offers-up-to-date-safety-information-on-all-your-cruise-tour-destinations-you-are-advised-to-check-this-information-at-https-travel-state-gov-span2">
                  https://travel.state.gov
                </span>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="text-[#1e1e1e] text-center font-['Raleway-Regular',_sans-serif] text-[13px] leading-[20.8px] font-normal relative flex items-center justify-center">
          ©2025-2026 Emerald Cruises. All rights reserved{" "}
        </div>
      </div>
    </div>
  );
};
