import React from "react";
import { Link } from "react-router-dom";

//Image logo 
import { imageKaiPetLogo } from "../../assets/helpers/Images";

//Components
import Location from "./Location";
import SearchInput from "./SearchInput";
import SocialNetworks from "./SocialNetworks";
import Account from "./Account";
import Cart from "./Cart";
import Favourites from "./Favourites";

function YellowTop() {
  return (
    <div className="bg-[#F8CF32] pt-2">
      <div
        className="flex flex-row justify-between mx-48 items-center max-lg:mx-24 max-sm:mx-2  max-sm:justify-center"
        id="zindexFixFirst">
        <div className="max-sm:w-1/4">
          <Location />
        </div>
        <div className="sm:flex flex-row items-center gap-3 font-fontGafata hidden max-sm:w-1/4 ">
          <SocialNetworks />
        </div>
        <div className="sm:hidden w-1/4">
          <Favourites />
        </div>
        <div className="sm:hidden w-1/4">
          <Cart />
        </div>
        <Account />
      </div>
      <div
        className="flex flex-row justify-between mx-48 items-center max-lg:flex-wrap max-lg:mx-24 max-sm:mx-8 max-lg:justify-center"
        id="zindex"
      >
        <Link to={"/"} className="flex flex-row">
          <img src={imageKaiPetLogo} className="w-16 sm:w-32" alt="img-kaipet"></img>
          <div className="flex flex-col justify-end  text-white font-logoFont sm:gap-2 sm:mb-2 mr-44 max-lg:mr-0">
            <p className="text-2xl sm:text-4xl">KAI</p>
            <p className="text-2xl sm:text-4xl">PET</p>
          </div>
        </Link>
        <SearchInput />
        <div className="flex gap-4 sm:mt-12 lg:mt-3 mb-3">
          <div className="flex flex-row items-center font-fontGafata gap-2 max-sm:hidden">
            <Favourites />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YellowTop;
