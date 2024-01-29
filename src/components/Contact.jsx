import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" my-16 flex items-start gap-10 max-w-[1200px] m-auto lg:flex-row flex-col px-5 2xl:px-0">
        <form className=" w-full lg:w-1/2">
          <h2 className=" text-gray-500 font-semibold mb-3">CONTACT US</h2>
          <div className=" bg-gray-100 mb-5">
            <label htmlFor="name"></label>
            <input
              className=" bg-transparent w-full outline-none px-2 py-3 text-sm focus:ring-1"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className=" bg-gray-100 mb-5">
            <label htmlFor="phone"></label>
            <input
              className=" bg-transparent w-full outline-none px-2 py-3 text-sm focus:ring-1"
              type="phone"
              id="phone"
              placeholder="Phone"
            />
          </div>
          <div className=" bg-gray-100 mb-5">
            <label htmlFor="email"></label>
            <input
              className=" bg-transparent w-full outline-none px-2 py-3 text-sm focus:ring-1"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className=" bg-gray-100 mb-5">
            <textarea
              cols="20"
              rows="10"
              placeholder="How can we serve you?"
              className="bg-transparent w-full px-3 outline-none focus:ring-1"
            ></textarea>
          </div>
          <div>
            <button className=" bg-[#8D6956] w-full px-4 py-3 text-white globalShadow">
              Send
            </button>
            <span className=" text-[12px] text-[rgb(94,94,94)] flex items-center justify-center mt-8 ">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </span>
          </div>
        </form>

        <div className=" w-full lg:w-1/2">
          <h2 className=" text-[rgb(27,27,27)] my-5 font-[16px]">
            SPECIAL REQUESTS?
          </h2>
          <p className=" leading-[1.6] text-[16px] text-[rgb(94,94,94)] my-6">
            Do you have dietary concerns? Questions about an upcoming event?
            Drop us a line and we'll get back to you soon!
          </p>
          <h2 className=" text-[rgb(27,27,27)] my-5 font-[16px]">
            YAMM BUFFET
          </h2>
          <p className=" leading-[1.6] text-[16px] text-[rgb(94,94,94)] my-6">
            7-9 Whitehall Street Dundee DD1 4AA United Kingdom
          </p>

          <div className="leading-[1.6] text-[rgb(94,94,94)] my-8 font-[16px]">
            <h2>01382 227759</h2>
            <h2>yammbuffet@gmail.com</h2>
          </div>

          <h2 className="text-[rgb(27,27,27)] my-5 font-[16px]">
            OPENINGHOURS
          </h2>
          <select className=" outline-none leading-[1.6] text-[rgb(94,94,94)] my-2 font-[16px]">
            <option value="">Open today 12:00 / 22:00</option>
            <option value="">Tue 12:00 / 22:00</option>
            <option value="">Wed 12:00 / 22:00</option>
            <option value="">Thu 12:00 / 22:00</option>
            <option value="">Fri 12:00 / 22:30</option>
            <option value="">Sat 12:00 / 22:30</option>
            <option value="">Sun 12:00 / 22:00</option>
          </select>
        </div>
      </div>
      {/* Google Map */}
      <div>
        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen=""
          className=" w-full"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4408.971468863356!2d-2.9756963509820324!3d56.45939259341565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x48865ceab7339689%3A0x598e934b39f9181!2s7-9%20Whitehall%20St%2C%20Dundee%20DD1%204AA%2C%20UK!3m2!1d56.459392699999995!2d-2.9705464999999998!5e0!3m2!1sen!2s!4v1706076873013!5m2!1sen!2s"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
