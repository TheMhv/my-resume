import React from "react";
import {
  LuGithub,
  LuGlobe,
  LuLinkedin,
  LuMapPin,
  LuPhone,
  LuTwitter,
  LuUser,
} from "react-icons/lu";
import { TbBrandDiscord } from "react-icons/tb";

class LeftMenu extends React.Component {
  render() {
    return (
      <div className="col-span-4 px-3 pt-3 pb-5">
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
            <span className="font-semibold ml-2">Fulano Ciclano</span>
          </div>

          <div className="flex items-center">
            <LuPhone className="mr-1" />
            <span>Phone:</span>
            <span className="font-semibold hover:underline ml-1">
              +55 (31) 90000-0000
            </span>
          </div>

          <div className="flex items-center">
            <LuMapPin className="mr-1" />
            <span>Address:</span>
            <span className="font-semibold ml-2">Rua dos Bobos</span>
          </div>

          <div>
            <span className="flex items-center">
              <LuGlobe className="mr-1" />
              Social Medias:
            </span>
            <ul className="pl-10">
              <div className="flex items-center italic py-0 hover:underline hover:font-semibold">
                <LuGithub className="mr-1" /> Github
              </div>
              <div className="flex items-center italic py-0 hover:underline hover:font-semibold">
                <LuLinkedin className="mr-1" /> LinkedIn
              </div>
              <div className="flex items-center italic py-0 hover:underline hover:font-semibold">
                <LuTwitter className="mr-1" /> Twitter
              </div>
              <div className="flex items-center italic py-0 hover:underline hover:font-semibold">
                <TbBrandDiscord className="mr-1" /> Discord
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftMenu;
