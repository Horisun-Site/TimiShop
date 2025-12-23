import React from "react";
import mapsflags from "../assets/mapsflags.png";
import phonecall from "../assets/phonecall.png";
import em1ail from "../assets/em1ail.png";
import tele1phone from "../assets/tele1phone.png";
import skype from "../assets/skype.png";
import rightarrow from "../assets/rightarrow.png";

const Bottom = () => {
  return (
    <div className="bg-[#1a1a1a] text-white px-4 sm:px-6 md:px-12 py-14">
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-10 
        sm:gap-12 
        md:gap-14
      ">

        {/* Shop Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Shop Categories
          </h2>
          <div className="flex flex-col gap-3">
            {[
              "Phones & Tablets",
              "Electronics",
              "Men Fashion",
              "Women Fashion",
              "Beauty & Care",
              "Kitchen Appliances",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 cursor-pointer hover:ml-2 transition-all"
              >
                <img src={rightarrow} className="w-[18px]" />
                <p className="hover:text-[#4d61ff] text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Customer Support
          </h2>
          <div className="flex flex-col gap-3">
            {[
              "Help Center",
              "Track Your Order",
              "Return Policy",
              "Shipping Info",
              "Payment Options",
              "Report a Product",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 cursor-pointer hover:ml-2 transition-all"
              >
                <img src={rightarrow} className="w-[18px]" />
                <p className="hover:text-[#4d61ff] text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Contact Us
          </h2>

          {[
            { icon: mapsflags, text: "23 Prince Emilere, Nigeria" },
            { icon: phonecall, text: "+234 916 529 7719" },
            { icon: em1ail, text: "horisunola@gmail.com" },
            { icon: tele1phone, text: "+234 808 255 0673" },
            { icon: skype, text: "yourshop_live" },
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-3">
              <div className="
                h-[40px] 
                w-[40px] 
                rounded-full 
                bg-white 
                flex 
                items-center 
                justify-center 
                hover:scale-110 
                transition-all
              ">
                <img src={item.icon} className="w-[20px]" />
              </div>
              <p className="ml-3 text-sm md:text-base text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Download App / Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Stay Connected
          </h2>

          <p className="text-white/80 mb-4 text-sm md:text-base">
            Follow us on social media or download our mobile app.
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            {["facebook", "instagram", "twitter", "whatsapp"].map((soc, i) => (
              <div
                key={i}
                className="
                  bg-white 
                  text-black 
                  px-3 py-2 
                  rounded-full 
                  text-xs sm:text-sm 
                  font-semibold 
                  hover:bg-[#4d61ff] 
                  hover:text-white 
                  transition-all 
                  cursor-pointer
                "
              >
                {soc}
              </div>
            ))}
          </div>

          <button className="
            bg-[#4d61ff] 
            px-5 
            py-3 
            rounded-lg 
            text-sm sm:text-base 
            text-white 
            font-semibold 
            hover:bg-white 
            hover:text-[#4d61ff] 
            transition-all
          ">
            Download App
          </button>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-white/60 text-xs sm:text-sm mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} YourShop. All Rights Reserved.
      </div>
    </div>
  );
};

export default Bottom;
