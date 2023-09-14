import Image from "next/image";
import SEO from "../components/SEO";
import Button from "../components/Button";
import Letter from "../components/Letter";

import { motion, useScroll, useTransform } from "framer-motion";

const navList = [
  { name: "Credits", link: "#credits" },
  { name: "Collection", link: "/collection" },
  { name: "Contribute", link: "/collection" },
  { name: "Github", link: "https://github.com/ansonyuu/levers" }
];

export default function Home() {
  const { scrollY } = useScroll();
  const closer = useTransform(scrollY, [0, 800], [2000, 0]);
  const normal = useTransform(scrollY, [0, 800], [500, 0]);
  const far = useTransform(scrollY, [0, 800], [200, 0]);
  const rotate = useTransform(scrollY, [0, 800], [0, 360]);

  return (
    <div className="">
      <SEO title="Home" />

      <div className="flex flex-col relative w-full ">
        <img
          className="w-[100vw] mt-[-30px] inline-block"
          src="/index-topbanner.png"
          alt="decorational photo"
        />

        <div className="md:px-10 lg:px-20 w-full h-auto relative flex flex-col ">
          <div className="flex flex-row justify-end m-10 gap-x-4">
            {navList.map((navItem) => {
              return (
                <a className="no-underline" href={navItem.link}>
                  <p className="text-right text-black ">{navItem.name}</p>
                </a>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center m-10 gap-x-4">
            <h1 className="text-center text-black normal-case">
              Levers for <br />
              Progress
            </h1>
            <Button className="mt-10 md:mt-20" />
          </div>
        </div>
      </div>
      <Letter />
    </div>
  );
}
