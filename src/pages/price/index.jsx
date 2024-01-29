import React from "react";
import Image from "next/image";

const index = ({ res }) => {
  return (
    <>
      <div className="maxPad">
        <div className="parentPrice">
          {res?.map((v, i) => (
            <div className="priceMain" key={i}>
              <Image width={300} height={300} alt="" src={v.img}></Image>

              <div className="priceContentDiv">
                <h2>{v.itemName}</h2>
                <p>{v.desc}</p>
                <span>{v.price} $</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps() {
  const data = await fetch("https://yammbuffet.vercel.app/api/price");
  const res = await data.json();

  return {
    props: { res: res?.message },
  };
}
