import React from "react";
import FooterLogo from "../../assets/shopify-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#home",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className=" bg-black/80 text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Shopsy
              <img src={FooterLogo} alt="logo" className="max-w-[50px]" />
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem
              velit at facere obcaecati et.
            </p>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div>
                <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                        <FaInstagram className="text-3xl"/>
                    </a>
                    <a href="#">
                        <FaFacebook className="text-3xl"/>
                    </a>
                    <a href="#">
                        <FaLinkedin className="text-3xl"/>
                    </a>
                </div>
                <div className="mt-6">
                    <div className="flex items-center gap-3">
                        <FaLocationArrow />
                        <p>Noida, Nairobi Kenya</p>
                    </div>
                </div>
                 <div className="mt-6">
                    <div className="flex items-center gap-3">
                        <FaMobileAlt />
                        <p>+254 712313980</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
