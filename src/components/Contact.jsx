import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" my-16 flex items-center gap-5 max-w-[1200px] m-auto">
        <form className=" w-1/2">
          <h2 className=" text-gray-500 font-semibold mb-3">CONTACT US</h2>
          <div className=" bg-gray-100 py-2 mb-5">
            <label htmlFor="name"></label>
            <input
              className=" bg-transparent w-full outline-none px-2 py-1"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className=" bg-gray-100 py-2 mb-5">
            <label htmlFor="phone"></label>
            <input
              className=" bg-transparent w-full outline-none px-2 py-1"
              type="phone"
              id="phone"
              placeholder="Phone"
            />
          </div>
          <div className=" bg-gray-100 py-2 mb-5">
            <label htmlFor="email"></label>
            <input
              className=" bg-transparent w-full outline-none px-2 py-1"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className=" bg-gray-100 py-2 mb-5">
            <textarea
              cols="30"
              rows="10"
              placeholder="How can we serve you?"
              className="bg-transparent w-full px-3"
            ></textarea>
          </div>
        </form>

        <div>
          <h2 className=" text-gray-500 font-semibold mb-3">
            SPECIAL REQUESTS? US
          </h2>
          <p>
            Do you have dietary concerns? Questions about an upcoming event?
            Drop us a line, and we'll get back to you soon!
          </p>
          <h2>YAMM BUFFET</h2>
          <span>7-9 Whitehall Street, Dundee, DD1 4AA, United Kingdom</span>
          <p>OPENINGHOURS</p>
          <select>
            <option value="">Open today 12:00 {" – "} 22:00</option>
            <option value="">Open today 12:00 {" – "} 22:00</option>
            <option value="">Open today 12:00 {" – "} 22:00</option>
            <option value="">Open today 12:00 {" – "} 22:00</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Contact;
