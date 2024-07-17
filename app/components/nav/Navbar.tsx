"use client";

import { AiFillShopping, AiOutlineShopping } from "react-icons/ai";
import Container from "../Container";
import { useEffect} from "react";

const Navbar = () => {
  const navScroll = () => {
    const navElement = document.getElementById("Navbar");
    if (navElement) {
      if (window.scrollY > 0) {
        navElement.classList.remove("bg-slate-950");
        navElement.classList.add("bg-slate-900");
      } else {
        navElement.classList.remove("bg-slate-900");
        navElement.classList.add("bg-slate-950");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navScroll);
    return () => window.removeEventListener("scroll", navScroll);
  }, []);

  return (
    <div
      id="Navbar"
      className="sticky top-0 w-full z-30 shadow-sm transition ease-in-out duration-500"
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <div>
            <a className="flex group gap-1" href="#">
              <p className="text-white group-hover:text-orange-700 duration-700">
                Scheming{" "}
              </p>
              <span className="text-orange-700 group-hover:text-white duration-700">
                Animations
              </span>
            </a>
          </div>
          <ul className="flex gap-8 items-center">
            <li className="group">
              <a href="#">Shop</a>
              <div className="w-0 h-[2px] bg-orange-600 rounded-full group-hover:w-full duration-500" />
            </li>
            <li className="group">
              <a href="#">Contact</a>
              <div className="w-0 h-[2px] bg-orange-600 rounded-full group-hover:w-full duration-500" />
            </li>
            <li>
              <AiOutlineShopping size={24} />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
