import React, { useState } from "react";
import Allow from "./Allow";
import email from "../assets/email.png";
import phone1call from "../assets/phone1call.png";
import maps from "../assets/maps.png";
import telephone from "../assets/telephone.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";

const Olado = () => {
  const [department, setDepartment] = useState("");

  return (
    <div className="min-h-[100vh] bg-[#15171a] flex items-center justify-center py-16 px-4">
      <div className="flex h-[95%] flex-col lg:flex-row w-full max-w-[1300px] bg-black border-[5px] border-[#15171a] shadow-[0_0_25px_#15171a] rounded-2xl overflow-hidden">
        {/* LEFT FORM SIDE */}
        <div className="flex flex-col justify-start gap-[50px] w-full lg:w-[40%] p-8 text-white">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-end">
              <h3 className="text-3xl font-semibold">Send Your</h3>
              <h3 className="text-3xl italic font-medium text-[#4d61ff]">
                Message
              </h3>
            </div>
            <div className="w-[60px] h-[3px] bg-[#4d61ff] mt-2 rounded-full"></div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-[50px] text-[#5b85a3] text-sm">
            <div className="flex flex-col gap-2">
              <label htmlFor="nameinput">Your Name (*)</label>
              <input
                id="nameinput"
                type="text"
                className="h-[65px] w-full rounded-2xl px-4 text-lg text-black bg-white outline-none border-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="emailinput">Your Email (*)</label>
              <input
                id="emailinput"
                type="email"
                className="h-[65px] w-full rounded-2xl px-4 text-lg text-black bg-white outline-none border-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phoneinput">Phone</label>
              <input
                id="phoneinput"
                type="text"
                className="h-[65px] w-full rounded-2xl px-4 text-lg text-black bg-white outline-none border-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="departmentinput">Department</label>
              <select
                id="departmentinput"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="h-[65px] w-full rounded-2xl px-4 text-lg text-black bg-white outline-none border-none cursor-pointer"
              >
                <option value="">Select a department</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Sales">Sales</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Marketing">Marketing</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Others">Others....</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="questioninput">Your Question</label>
              <textarea
                id="questioninput"
                className="h-[300px] w-full rounded-2xl p-4 text-lg text-black bg-white outline-none resize-none border-none"
              ></textarea>
            </div>
          </div>

          <button className="mt-2 w-[130px] h-[45px] rounded-full bg-[#4d61ff] text-white font-semibold text-sm hover:bg-white hover:text-[#4d61ff] transition-all">
            Submit
          </button>
        </div>

        {/* RIGHT CONTACT SIDE */}
        <div className="flex h-auto flex-col w-full lg:w-[60%]">
          {/* Contact Details */}
          <div className="flex flex-wrap justify-center items-start md:items-center gap-10 sm:gap-16 md:gap-24 lg:gap-[120px] py-10">
            {/* Left Column */}
            <div className="flex flex-col gap-10 sm:gap-12 md:gap-[65px]">
              <Allow
                image={email}
                text1="Support"
                text2="horisunola@gmail.com"
              />
              <Allow
                image={phone1call}
                text1="Phone"
                text2="+234 (916) 529-7719"
              />
              <Allow image={maps} text1="Address" text2="Ofada, Ogun State" />
            </div>

            {/* Right Column */}
            <div className="flex flex-col mr-[15px] gap-10 sm:gap-12 md:gap-[65px]">
              <Allow
                image={telephone}
                text1="Fax"
                text2="+234 (916) 529-7719"
              />
              <Allow image={twitter} text1="Twitter" text2="@Mr white" />
              <Allow image={facebook} text1="Facebook" text2="scott emmy" />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full h-auto flex items-center justify-center">
            <img
              src="https://i.pinimg.com/736x/0f/75/6b/0f756b3ccbc17d360ebfe2a31483091b.jpg"
              alt="map"
              className="w-[100%] h-[auto] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Olado;
