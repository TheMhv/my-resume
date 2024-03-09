import React from "react";
import {
  LuGithub,
  LuGlobe,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
  // LuTwitter,
  LuUser,
} from "react-icons/lu";
import { TbBrandDiscord, TbBrandWhatsapp } from "react-icons/tb";
import Flag from "react-world-flags";

class LeftMenu extends React.Component {
  render() {
    return (
      <>
        <img
          src="/assets/img/me.jpeg"
          className="rounded-full bg-gray-300"
          height="250px"
          width="250px"
          alt=""
        />

        <hr className="border-1 border-gray-500 my-5" />

        <div className="space-y-3">
          <div className="flex items-center">
            <LuUser className="mr-1" />
            <span>Name:</span>
            <span className="font-semibold ml-2">Luiz F. G. Medina</span>
          </div>

          <div className="flex items-center">
            <LuMail className="mr-1" />
            <span>Email:</span>
            <a
              className="font-semibold hover:underline ml-1"
              href="mailto:mhv.geral@gmail.com"
            >
              mhv.geral@gmail.com
            </a>
          </div>

          <div className="flex items-center">
            <LuPhone className="mr-1" />
            <span>Phone:</span>
            <a
              className="font-semibold hover:underline ml-1"
              href="tel:+5531995933036"
            >
              +55 (31) 99593-3036
            </a>
          </div>

          <div className="flex items-center">
            <LuMapPin className="mr-1" />
            <span>Country:</span>
            <span className="flex items-center font-semibold ml-1">
              Brazil
              <Flag
                code="BR"
                className="rounded ml-2"
                height="25px"
                width="25px"
              />
            </span>
          </div>

          <div>
            <span className="flex items-center">
              <LuGlobe className="mr-1" />
              Social Medias:
            </span>

            <ul className="pl-7 space-y-1">
              <a
                className="flex items-center italic py-0 hover:underline hover:font-semibold"
                href="https://github.com/TheMhv"
              >
                <LuGithub className="mr-1" /> Github
              </a>

              <a
                className="flex items-center italic py-0 hover:underline hover:font-semibold"
                href="https://www.linkedin.com/in/luizmedinaa/"
              >
                <LuLinkedin className="mr-1" /> LinkedIn
              </a>

              {/* <div className="flex items-center italic py-0 hover:underline hover:font-semibold">
                <LuTwitter className="mr-1" /> Twitter
              </div> */}

              <a
                className="flex items-center italic py-0 hover:underline hover:font-semibold"
                href="https://discordapp.com/users/230145118814863362"
              >
                <TbBrandDiscord className="mr-1" /> Discord
              </a>

              <a
                className="flex items-center italic py-0 hover:underline hover:font-semibold"
                href="https://api.whatsapp.com/send?phone=553195933036"
              >
                <TbBrandWhatsapp className="mr-1" /> WhatsApp
              </a>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default LeftMenu;
