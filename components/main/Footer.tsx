import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px]">More about me</div>

            <a href="https://github.com/molinalim">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </a>
            <a href="https://www.linkedin.com/in/molina-lim-166617185/">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </p>
            </a>
            <a href="mailto:limmolina99@gmail.com">
              <div>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <span className="text-[15px] ml-[6px]">
                    limmolina99@gmail.com
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
