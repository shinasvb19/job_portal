import React from "react";
import IconCards from "../components/IconCards";
import MainTitle from "../components/MainTitle";
import Navbar from "../components/Navbar";
import { GoDeviceDesktop } from "react-icons/go";
import {
  FcBusinessman,
  FcBullish,
  FcCommandLine,
  FcCamcorderPro,
  FcShipped,
} from "react-icons/fc";
import LandingPageCard from "../components/LandingPageCard";
import Footer from "../components/Footer";
const icon = [
  {
    component: <GoDeviceDesktop className="text-[50px]" />,
    desc: "software engneering",
  },
  { component: <FcBusinessman className="text-[50px]" />, desc: "Bussiness" },
  { component: <FcBullish className="text-[50px]" />, desc: "Stokes" },
  { component: <FcCommandLine className="text-[50px]" />, desc: "Programing" },
  { component: <FcCamcorderPro className="text-[50px]" />, desc: "Media" },
  { component: <FcShipped className="text-[50px]" />, desc: "Delivery" },
];

const LandingPage = () => {
  return (
    <>
      <body class="flex flex-col min-h-screen">
        <Navbar />
        <div className="bg-[#EDF3F5]  w-full-width h-[600px]">
          <section className="grid  grid-cols-1 md:grid-cols-2 ">
            <MainTitle />

            <div
              className="mx-100 relative sm:hidden md:hidden lg:block"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dlabwmroq/image/upload/v1671514614/bodyimage_1_lfftsp.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="  md:w-[200px] md:h-[600px]"
                style={{
                  background: ` linear-gradient(100.42deg, #EDF3F5 52.01%, rgba(217, 217, 217, 0) 77.1%)`,
                }}
              ></div>
            </div>
            <div className="max-w-[1400px] absolute top-[630px] left-40 py-6 mx-auto">
              <h1 className="text-3xl font-extrabold hidden lg:block">
                Search <br />
                by category
              </h1>
            </div>
          </section>

          <div className=" py-72 lg:py-10 md:my-12 max-w-[1400px] lg:mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
            {icon.map((item) => {
              return <IconCards item={item} />;
            })}
          </div>
          <div className="  max-w-[1000px] lg:mx-auto  grid gap-1 grid-cols-1 md:grid-cols-2 ">
            <LandingPageCard />
            <LandingPageCard />
            <LandingPageCard />
            <LandingPageCard />
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
};

export default LandingPage;
