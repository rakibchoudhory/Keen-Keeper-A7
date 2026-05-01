import React from "react";
import MyNavLink from "./MyNavLink";
import { IoHomeOutline } from "react-icons/io5";
import {  RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="shadow-[0_5px_5px_-5px_rgba(0,0,0,0.3)]">
      <div className="navbar bg-base-100  w-11/12 mx-auto flex justify-between ">
        <div className="navbar-start ">
          <div className="dropdown block md:hidden  mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
               
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <MyNavLink to={"/"}>
                <div className="flex items-center gap-1">
                  <IoHomeOutline />
                  Home
                </div>
              </MyNavLink>

              <MyNavLink to={"/timeline"}>
               <div className="flex items-center gap-1">
                  <RiTimeLine />
                  Timeline
                </div>
              </MyNavLink>

              <MyNavLink to={"/stats"}>
                <div className="flex items-center gap-1">
                  <TfiStatsUp />
                  Stats
                </div>
              </MyNavLink>
            </ul>
          </div>
          <Link href="/" className="font-bold text-2xl md:text-3xl text-[#1F2937]">Keen<span className="text-[#244d3f]">Keeper</span></Link>
        </div>

        <div className="navbar-end hidden md:flex">
          <ul className="flex gap-5">
              <MyNavLink to={"/"}>
                <div className="flex items-center gap-1">
                  <IoHomeOutline />
                  Home
                </div>
              </MyNavLink>

              <MyNavLink to={"/timeline"}>
               <div className="flex items-center gap-1">
                  <RiTimeLine />
                  Timeline
                </div>
              </MyNavLink>

              <MyNavLink to={"/stats"}>
                <div className="flex items-center gap-1">
                  <TfiStatsUp />
                  Stats
                </div>
              </MyNavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
